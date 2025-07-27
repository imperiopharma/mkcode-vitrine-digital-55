
import React, { useEffect, useRef } from 'react';

interface MatrixCodeRainProps {
  opacity?: number;
  className?: string;
}

const MatrixCodeRain: React.FC<MatrixCodeRainProps> = ({ 
  opacity = 0.6, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full size of container
    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };

    // Initial resize
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // More realistic terminal text with commands and system data
    const lines = [
      "root@mk-code:~# ls -la",
      "total 284",
      "drwxr-xr-x  20 root root   4096 Sep 15 17:42 .",
      "drwxr-xr-x   3 root root   4096 Aug 27 09:10 ..",
      "-rw-------   1 root root   3574 Sep 10 14:22 .bash_history",
      "-rw-r--r--   1 root root    570 Jan 31  2010 .bashrc",
      "drwx------   2 root root   4096 Aug 27 09:11 .cache",
      "drwxr-xr-x   3 root root   4096 Aug 27 09:25 .config",
      "drwxr-xr-x   3 root root   4096 Sep 14 12:14 projects",
      "-rwxr-xr-x   1 root root    185 Sep 15 15:42 deploy.sh",
      "drwxr-xr-x   5 root root   4096 Sep 10 17:36 docker",
      "drwxr-xr-x   4 root root   4096 Sep  2 09:12 node_modules",
      "user@mk-code:~# cd projects",
      "user@mk-code:~/projects# ls",
      "client-website-1  client-website-2  e-commerce  landing-page",
      "user@mk-code:~/projects# git status",
      "On branch main",
      "Your branch is up to date with 'origin/main'",
      "nothing to commit, working tree clean",
      "user@mk-code:~/projects# npm run build",
      "> build",
      "> vite build",
      "vite v4.3.8 building for production...",
      "✓ 1270 modules transformed.",
      "dist/assets/index-5f58c4d7.css   69.87 KiB",
      "dist/assets/index-8a797b5a.js     2.12 MiB",
      "user@mk-code:~/projects# sudo systemctl restart nginx",
      "user@mk-code:~/projects# ps aux | grep node",
      "root     12450  0.0  0.2 2351716 33548 ?  Ssl  Sep15  0:05 node server.js",
      "root     15782  0.0  0.0  14428  1080 pts/0 S+   12:35  0:00 grep --color=auto node",
      "user@mk-code:~/projects# docker ps",
      "CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS",
      "3fa85f6459d7   postgres:13    \"docker-entrypoint.s…\"   3 hours ago    Up 3 hours",
      "4bb5d82d3e0a   redis:alpine   \"docker-entrypoint.s…\"   3 hours ago    Up 3 hours",
      "user@mk-code:~/projects# _"
    ];

    // Font size and spacing for readable terminal text
    const fontSize = 16;
    const lineHeight = fontSize * 1.5;
    
    // Calculate number of lines that fit
    const totalLines = Math.floor(canvas.height / lineHeight);
    
    // Initialize positions array - for scrolling effect
    let positions: number[] = [];
    let currentPosition = -canvas.height; // Start positions above the canvas
    
    // Set lines to start above the screen for downward scrolling effect
    for (let i = 0; i < lines.length; i++) {
      positions.push(currentPosition);
      currentPosition += lineHeight;
    }

    // How many pixels to move down each frame - increased for faster scrolling
    const scrollSpeed = 1.5; // Increased from 0.5 to 1.5 for faster scrolling

    // Main animation function
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(10, 15, 21, 0.07)'; // More transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw terminal text lines
      for (let i = 0; i < lines.length; i++) {
        // Update position - positive scrollSpeed moves downward
        positions[i] += scrollSpeed;
        
        // If line moves off-screen at the bottom, reset to top
        if (positions[i] > canvas.height && scrollSpeed > 0) {
          // Move this line to above the top of the screen
          positions[i] = -lineHeight * 2;
        }
        
        // Only draw visible lines
        if (positions[i] < canvas.height && positions[i] > -lineHeight) {
          const lineText = lines[i];
          
          // Color based on line content to mimic terminal
          if (lineText.includes('user@mk-code') || lineText.includes('root@mk-code')) {
            // Command prompt
            ctx.fillStyle = 'rgba(0, 191, 255, 0.7)'; // Bright blue with transparency
            ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
          } else if (lineText.includes('npm run') || lineText.includes('git ') || 
                    lineText.includes('docker ') || lineText.includes('sudo ')) {
            // Commands
            ctx.fillStyle = 'rgba(0, 191, 255, 0.7)'; // Bright blue with transparency
            ctx.font = `${fontSize}px 'Courier New', monospace`;
          } else if (lineText.includes('error') || lineText.includes('Error')) {
            // Errors
            ctx.fillStyle = 'rgba(255, 85, 85, 0.7)'; // Red with transparency
            ctx.font = `${fontSize}px 'Courier New', monospace`;
          } else {
            // Output text
            ctx.fillStyle = 'rgba(51, 195, 240, 0.7)'; // Light blue with transparency
            ctx.font = `${fontSize}px 'Courier New', monospace`;
          }
          
          // Add text shadow for glow effect
          ctx.shadowColor = '#00BFFF';
          ctx.shadowBlur = 2;
          
          // Draw text
          ctx.fillText(lineText, 10, positions[i]);
          
          // Reset shadow
          ctx.shadowBlur = 0;
        }
      }
      
      // Add cursor blink at the last line that's visible
      const lastVisibleLineIndex = positions.findIndex(pos => pos > 0 && pos < canvas.height);
      if (lastVisibleLineIndex >= 0 && lines[lastVisibleLineIndex].endsWith('_')) {
        // Cursor blink effect
        if (Math.floor(Date.now() / 500) % 2 === 0) {
          ctx.fillStyle = 'rgba(0, 255, 255, 0.7)'; // Cyan with transparency
          const cursorY = positions[lastVisibleLineIndex];
          const textWidth = ctx.measureText(lines[lastVisibleLineIndex]).width;
          ctx.fillRect(textWidth + 10, cursorY - fontSize, fontSize/2, fontSize);
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      style={{ opacity }}
    />
  );
};

export default MatrixCodeRain;
