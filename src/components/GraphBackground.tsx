import { useEffect, useRef, useState } from 'react';

export const GraphBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = Math.max(1, window.devicePixelRatio || 1);
    
    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
      canvas.width = Math.floor(innerWidth * DPR);
      canvas.height = Math.floor(innerHeight * DPR);
    };
    
    resize();
    window.addEventListener('resize', resize);

    const NUM_NODES_BASE = 100;
    const EDGE_PROBABILITY = 0.06;
    const NODE_COLOR = 'rgba(255, 255, 255, 0.9)';
    const EDGE_COLOR = 'rgba(255, 255, 255, 0.3)';
    const MAX_SPEED = 0.35;
    const NODE_RADIUS = 3.0 * DPR;

    let nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    
    const init = () => {
      const numNodes = Math.floor(Math.random() * 4) + 4; // Random between 4-7
      nodes = new Array(numNodes).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: rand(-MAX_SPEED, MAX_SPEED) * DPR,
        vy: rand(-MAX_SPEED, MAX_SPEED) * DPR
      }));
    };
    
    init();
    window.addEventListener('resize', init);

    // Mouse interaction handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) * DPR,
        y: (e.clientY - rect.top) * DPR
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw edges probabilistically per frame to create subtle flicker
      ctx.lineWidth = 1 * DPR;
      ctx.strokeStyle = EDGE_COLOR;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.random() < EDGE_PROBABILITY) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update positions and draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        
        // Calculate distance to mouse for interaction
        const distToMouse = isHovering ? 
          Math.sqrt((n.x - mousePos.x) ** 2 + (n.y - mousePos.y) ** 2) : Infinity;
        const isNearMouse = distToMouse < 100 * DPR;
        
        // Dynamic node size and opacity based on mouse proximity
        const nodeSize = isNearMouse ? NODE_RADIUS * 1.5 : NODE_RADIUS;
        const nodeOpacity = isNearMouse ? 1 : 0.8;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${nodeOpacity})`;
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connection to mouse when close
        if (isNearMouse) {
          ctx.strokeStyle = `rgba(255, 255, 255, 0.3)`;
          ctx.lineWidth = 1.5 * DPR;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(step);
    };
    
    requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('resize', init);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="graph-bg"
      aria-hidden="true"
    />
  );
};