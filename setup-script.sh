
#!/bin/bash

# Script de instalação para o site MK CODE
# Este script configura o ambiente necessário e instala o site em uma VPS

# Cores para melhor visualização
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando instalação do site MK CODE...${NC}\n"

# Verificar se o script está sendo executado como root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Por favor, execute este script como root (use sudo).${NC}"
  exit 1
fi

# Função para verificar o último comando e exibir status
check_status() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ $1 concluído com sucesso!${NC}"
  else
    echo -e "${RED}✗ Erro ao $1. Verifique os logs acima.${NC}"
    exit 1
  fi
}

# Atualizar sistema
echo -e "\n${YELLOW}Atualizando sistema...${NC}"
apt update && apt upgrade -y
check_status "atualizar o sistema"

# Instalar dependências necessárias
echo -e "\n${YELLOW}Instalando dependências...${NC}"
apt install -y curl wget git nginx nodejs npm
check_status "instalar dependências"

# Verificar versão do Node.js e atualizar se necessário
NODE_VERSION=$(node -v | cut -d 'v' -f 2 | cut -d '.' -f 1)
if [ "$NODE_VERSION" -lt 16 ]; then
  echo -e "\n${YELLOW}Atualizando Node.js para a versão LTS...${NC}"
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
  apt install -y nodejs
  check_status "atualizar Node.js"
fi

# Verificar se o domínio foi fornecido
if [ -z "$1" ]; then
  read -p "Digite o domínio para o site (ex: mkcode.com.br): " DOMAIN
else
  DOMAIN=$1
fi

# Criar diretório para o site
echo -e "\n${YELLOW}Configurando diretórios...${NC}"
SITE_DIR="/var/www/${DOMAIN}"
mkdir -p $SITE_DIR
check_status "criar diretório do site"

# Clonar repositório (ajuste para seu repositório Git)
echo -e "\n${YELLOW}Clonando repositório do site...${NC}"
read -p "Digite a URL do repositório Git (ou pressione Enter para pular): " GIT_REPO

if [ ! -z "$GIT_REPO" ]; then
  git clone $GIT_REPO $SITE_DIR
  check_status "clonar repositório"
else
  echo -e "${YELLOW}Pulando clone do repositório. Você precisará fazer upload dos arquivos manualmente.${NC}"
fi

# Navegar para o diretório do site
cd $SITE_DIR

# Instalar dependências do projeto
echo -e "\n${YELLOW}Instalando dependências do projeto...${NC}"
npm install
check_status "instalar dependências do projeto"

# Construir o projeto
echo -e "\n${YELLOW}Construindo o projeto...${NC}"
npm run build
check_status "construir o projeto"

# Configurar Nginx
echo -e "\n${YELLOW}Configurando Nginx...${NC}"
cat > /etc/nginx/sites-available/$DOMAIN <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    
    root $SITE_DIR/dist;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Configurações de cache para conteúdo estático
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
    
    # Logs de erro e acesso
    error_log /var/log/nginx/$DOMAIN-error.log;
    access_log /var/log/nginx/$DOMAIN-access.log;
}
EOF

# Ativar configuração do site
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
check_status "configurar Nginx"

# Verificar configuração do Nginx
nginx -t
check_status "verificar configuração do Nginx"

# Reiniciar Nginx
echo -e "\n${YELLOW}Reiniciando Nginx...${NC}"
systemctl restart nginx
check_status "reiniciar Nginx"

# Configurar HTTPS com Certbot (opcional)
echo -e "\n${YELLOW}Deseja configurar HTTPS com Let's Encrypt? (s/n)${NC}"
read HTTPS_OPTION

if [ "$HTTPS_OPTION" = "s" ] || [ "$HTTPS_OPTION" = "S" ]; then
  echo -e "\n${YELLOW}Instalando Certbot...${NC}"
  apt install -y certbot python3-certbot-nginx
  check_status "instalar Certbot"
  
  echo -e "\n${YELLOW}Configurando HTTPS com Certbot...${NC}"
  certbot --nginx -d $DOMAIN -d www.$DOMAIN
  check_status "configurar HTTPS"
  
  echo -e "\n${YELLOW}Configurando renovação automática de certificados...${NC}"
  echo "0 3 * * * certbot renew --quiet" | crontab -
  check_status "configurar renovação automática"
fi

echo -e "\n${GREEN}=====================================${NC}"
echo -e "${GREEN}Instalação concluída com sucesso!${NC}"
echo -e "${GREEN}=====================================${NC}"
echo -e "\nSite disponível em: http://$DOMAIN"
if [ "$HTTPS_OPTION" = "s" ] || [ "$HTTPS_OPTION" = "S" ]; then
  echo -e "Site com HTTPS: https://$DOMAIN"
fi
echo -e "\nPasta do site: $SITE_DIR"
echo -e "Logs Nginx: /var/log/nginx/$DOMAIN-*.log"
echo -e "\n${YELLOW}Para atualizar o site no futuro:${NC}"
echo -e "cd $SITE_DIR"
echo -e "git pull  # Para buscar alterações do repositório"
echo -e "npm install  # Se houver novas dependências"
echo -e "npm run build  # Para reconstruir o site"
echo -e "systemctl reload nginx  # Para recarregar o Nginx se necessário"

# Tornar o script executável
chmod +x $SITE_DIR/setup-script.sh
