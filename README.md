
# MK CODE - Website Institucional

Este é o repositório do site institucional da MK CODE, uma empresa de desenvolvimento de soluções digitais com identidade.

## Estrutura do Projeto

```
mk-code-site/
├── public/                  # Arquivos públicos (imagens, favicon, etc)
│   ├── lovable-uploads/     # Imagens enviadas pelo sistema Lovable
│   │   └── [imagens]        # Imagens do site (logo, etc)
│   ├── favicon.ico          # Favicon do site
│   ├── placeholder.svg      # Imagem placeholder
│   └── robots.txt           # Configurações para crawlers
│
├── src/                     # Código fonte do projeto
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes de UI básicos (shadcn UI)
│   │   │   ├── ButtonMk.tsx # Botão personalizado da MK CODE
│   │   │   ├── AnimatedCard.tsx # Cartão animado personalizado
│   │   │   └── [outros]     # Outros componentes de UI (button, card, etc)
│   │   │
│   │   ├── About.tsx        # Seção "Sobre nós"
│   │   ├── CTASection.tsx   # Seção de Call-to-Action
│   │   ├── Differentials.tsx # Seção de diferenciais
│   │   ├── Footer.tsx       # Rodapé do site
│   │   ├── ForWhom.tsx      # Seção "Para quem"
│   │   ├── Hero.tsx         # Seção principal (hero)
│   │   ├── MatrixCodeRain.tsx # Efeito de chuva de código matrix
│   │   ├── Navbar.tsx       # Barra de navegação
│   │   └── Products.tsx     # Seção de produtos/serviços
│   │
│   ├── hooks/               # Hooks personalizados React
│   │   ├── use-mobile.tsx   # Hook para detectar dispositivos móveis
│   │   └── use-toast.ts     # Hook para exibir toasts
│   │
│   ├── lib/                 # Bibliotecas e utilitários
│   │   └── utils.ts         # Funções utilitárias
│   │
│   ├── pages/               # Páginas da aplicação
│   │   ├── Index.tsx        # Página inicial (home)
│   │   └── NotFound.tsx     # Página 404 (não encontrada)
│   │
│   ├── App.tsx              # Componente principal da aplicação
│   ├── index.css            # Estilos globais CSS
│   ├── main.tsx             # Ponto de entrada principal
│   └── vite-env.d.ts        # Tipagens para ambiente Vite
│
├── .gitignore               # Arquivos ignorados pelo Git
├── components.json          # Configuração dos componentes shadcn/ui
├── eslint.config.js         # Configuração do ESLint
├── index.html               # HTML principal
├── package.json             # Dependências e scripts do npm
├── postcss.config.js        # Configuração do PostCSS
├── setup-script.sh          # Script de instalação para VPS
├── tailwind.config.ts       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
├── tsconfig.node.json       # Configuração do TypeScript para Node
└── vite.config.ts           # Configuração do Vite
```

## Tecnologias Utilizadas

- **Vite**: Build tool e servidor de desenvolvimento
- **React**: Biblioteca para construção de interfaces
- **TypeScript**: Linguagem de programação com tipagem estática
- **Tailwind CSS**: Framework de CSS utility-first
- **shadcn/ui**: Componentes de UI baseados em Radix UI
- **React Router**: Roteamento de páginas
- **Lucide React**: Biblioteca de ícones
- **Tanstack React Query**: Gerenciamento de estados e fetching de dados

## Componentes Principais

1. **Hero.tsx**: Seção principal do site com animação Matrix, destaque para a logo e chamadas para ação.
2. **Navbar.tsx**: Barra de navegação responsiva.
3. **About.tsx**: Seção sobre a empresa.
4. **Products.tsx**: Exibição dos principais produtos/serviços oferecidos.
5. **Differentials.tsx**: Diferenciais da empresa.
6. **ForWhom.tsx**: Para quem são os serviços.
7. **CTASection.tsx**: Seção de chamada para ação.
8. **Footer.tsx**: Rodapé com informações de contato e links.

## Componentes Personalizados

1. **ButtonMk.tsx**: Botão personalizado com estilo da MK CODE.
2. **AnimatedCard.tsx**: Cartão com efeitos de hover e glow.
3. **MatrixCodeRain.tsx**: Efeito visual de chuva de código no estilo Matrix.

## Hooks Personalizados

1. **use-mobile.tsx**: Detecta se o dispositivo é móvel para ajustar a UI.
2. **use-toast.ts**: Gerencia toasts de notificação.

## Estilos

O projeto utiliza Tailwind CSS para estilização, com classes utilitárias aplicadas diretamente nos componentes. 
Customizações específicas estão definidas no arquivo `tailwind.config.ts`.

## Responsividade

O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:
- Mobile: Layouts simplificados e componentes empilhados
- Tablet: Layout intermediário
- Desktop: Layout completo com todos os efeitos visuais

## Animações

- Fade-in e fade-up para elementos ao carregar a página
- Efeito de Matrix Code Rain em fundo semi-transparente
- Hover effects em botões e cards
- Efeitos de glow e blur para elementos decorativos
