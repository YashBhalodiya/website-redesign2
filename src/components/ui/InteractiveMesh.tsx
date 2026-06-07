import { useEffect, useRef } from 'react';

export default function InteractiveMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180, // Influence radius
    };

    // Responsive particle count
    const getParticleCount = (w: number, h: number) => {
      const area = w * h;
      return Math.min(80, Math.floor(area / 18000));
    };

    let particleCount = getParticleCount(width, height);
    let particles: Particle[] = [];

    // Check if dark mode is active
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow, elegant speed
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction: pull gently towards mouse if close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            // Calculate pull force (weaker as distance increases)
            const force = (mouse.radius - distance) / mouse.radius;
            // Gently attract
            this.x += (dx / distance) * force * 0.5;
            this.y += (dy / distance) * force * 0.5;
          }
        }
      }

      draw(c: CanvasRenderingContext2D, dark: boolean) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = dark 
          ? 'rgba(6, 182, 212, 0.35)' // Cyan in dark mode
          : 'rgba(79, 70, 229, 0.25)'; // Indigo in light mode
        c.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Draw lines between close particles
    const connectParticles = (c: CanvasRenderingContext2D, dark: boolean) => {
      const lineDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < lineDist) {
            const alpha = (lineDist - dist) / lineDist * 0.12;
            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(p2.x, p2.y);
            c.strokeStyle = dark
              ? `rgba(99, 102, 241, ${alpha})` // Purple in dark mode
              : `rgba(8, 145, 178, ${alpha})`; // Teal/Cyan in light mode
            c.lineWidth = 0.8;
            c.stroke();
          }
        }

        // Connect mouse to particles
        if (mouse.x !== null && mouse.y !== null) {
          const p = particles[i];
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);

          if (dist < mouse.radius) {
            const alpha = (mouse.radius - dist) / mouse.radius * 0.18;
            c.beginPath();
            c.moveTo(mouse.x, mouse.y);
            c.lineTo(p.x, p.y);
            c.strokeStyle = dark
              ? `rgba(6, 182, 212, ${alpha})` // Cyan glow towards mouse
              : `rgba(79, 70, 229, ${alpha})`; // Indigo glow towards mouse
            c.lineWidth = 1.0;
            c.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      const dark = isDarkMode();
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx, dark);
      });

      connectParticles(ctx, dark);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particleCount = getParticleCount(width, height);
      init();
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}
