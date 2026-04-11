import { useEffect, useRef } from "react";

/**
 * Particle Field
 * ───────────────
 * Hundreds of tiny teal particles drift slowly across the screen.
 * When two particles come within connection distance, a faint line
 * is drawn between them — opacity scaled by proximity, so near
 * particles glow brighter together. Feels like a living data graph.
 *
 * Architecture:
 *  1. PARTICLES   — each has position, velocity, size, and its own
 *                   opacity pulse on an independent sine cycle.
 *  2. CONNECTIONS — O(n²) proximity check; lines fade with distance.
 *                   Capped at 3 connections per particle to keep it
 *                   sparse and elegant rather than tangled.
 *  3. DEPTH FIELD — particles are assigned a "depth" (0–1) that
 *                   controls speed and size — far particles are
 *                   slower and smaller, creating parallax.
 *  4. MOUSE REPEL — a gentle repulsion field follows the cursor,
 *                   parting the field as the user moves through it.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;        // radius
  depth: number;    // 0 = far, 1 = close
  phase: number;    // for opacity sine cycle
  pulseSpeed: number;
  opacity: number;
}

const PARTICLE_COUNT   = 110;
const CONNECT_DIST     = 140;   // px — max distance to draw a line
const MAX_CONNECTIONS  = 4;     // per particle
const MOUSE_RADIUS     = 120;   // px — repulsion field radius
const MOUSE_STRENGTH   = 0.012; // repulsion force

const R = 47, G = 214, B = 176; // #2fd6b0

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    // ── Helpers ────────────────────────────────────────────
    const rand   = (min: number, max: number) => Math.random() * (max - min) + min;
    const randPM = (mag: number) => (Math.random() - 0.5) * 2 * mag;

    const initParticles = () => {
      const W = canvas.width;
      const H = canvas.height;
      particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
        const depth = Math.random();
        return {
          x:          rand(0, W),
          y:          rand(0, H),
          vx:         randPM(0.18 + depth * 0.22),
          vy:         randPM(0.12 + depth * 0.18),
          r:          0.8 + depth * 2.2,
          depth,
          phase:      rand(0, Math.PI * 2),
          pulseSpeed: rand(0.004, 0.012),
          opacity:    rand(0.3, 0.9),
        };
      });
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // ── Draw loop ──────────────────────────────────────────
    const draw = () => {
      const W  = canvas.width;
      const H  = canvas.height;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      ctx.clearRect(0, 0, W, H);

      const ps = particles.current;

      // Update positions
      ps.forEach((p) => {
        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const distSq = dx * dx + dy * dy;
        if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 0) {
          const dist  = Math.sqrt(distSq);
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
          p.vx += (dx / dist) * force * 8;
          p.vy += (dy / dist) * force * 8;
        }

        // Damping — gradually return to natural drift speed
        const maxSpeed = 0.28 + p.depth * 0.25;
        const speed    = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges with a small margin
        if (p.x < -20) p.x = W + 20;
        if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        if (p.y > H + 20) p.y = -20;
      });

      // Draw connections first (behind dots)
      for (let i = 0; i < ps.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < ps.length && connections < MAX_CONNECTIONS; j++) {
          const dx   = ps[i].x - ps[j].x;
          const dy   = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const proximity = 1 - dist / CONNECT_DIST;
            // Shared opacity — average of the two particles' pulses
            const pulseI  = (Math.sin(t * ps[i].pulseSpeed * 80 + ps[i].phase) + 1) / 2;
            const pulseJ  = (Math.sin(t * ps[j].pulseSpeed * 80 + ps[j].phase) + 1) / 2;
            const lineOp  = proximity * proximity * ((pulseI + pulseJ) / 2) * 0.35;

            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(${R},${G},${B},${lineOp.toFixed(3)})`;
            ctx.lineWidth   = proximity * 1.2;
            ctx.stroke();
            connections++;
          }
        }
      }

      // Draw particles
      ps.forEach((p) => {
        const pulse = (Math.sin(t * p.pulseSpeed * 80 + p.phase) + 1) / 2; // 0–1
        const base = p.r < 1.5 ? 0.18 : 0.2;
        const pulseScale = p.r < 1.5 ? 0.5 : 0.2;
        const op = (base + pulseScale * pulse) * p.opacity;

        // Outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        glow.addColorStop(0, `rgba(${R},${G},${B},${(op * 0.25).toFixed(3)})`);
        glow.addColorStop(1,   `rgba(${R},${G},${B},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${op.toFixed(3)})`;
        ctx.fill();
      });

      t += 1;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "hsl(220,22%,4.5%)" }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle ambient teal pool — centre of the field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(47,214,176,0.045) 0%, transparent 65%)",
        }}
      />

      {/* Vignette — darkens edges so particles pop in the centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 85% at 50% 45%, transparent 40%, rgba(10,11,18,0.55) 80%, rgba(10,11,18,0.85) 100%)",
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.022,
        }}
      />
    </div>
  );
};

export default AuroraBackground;