import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Two gentle bands — teal only, upper third of screen
    const bands = [
      { r: 47, g: 214, b: 176, yF: 0.18, amp: 55, freq: 0.0016, spd: 0.18, op: 0.07 },
      { r: 47, g: 214, b: 176, yF: 0.30, amp: 40, freq: 0.0020, spd: 0.13, op: 0.05 },
    ];

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      bands.forEach((b) => {
        const baseY = H * b.yF;
        const thickness = H * 0.20;

        ctx.beginPath();
        ctx.moveTo(0, baseY + Math.sin(t * b.spd) * b.amp);
        for (let x = 0; x <= W; x += 6) {
          const y =
            baseY +
            Math.sin(x * b.freq + t * b.spd) * b.amp +
            Math.sin(x * b.freq * 1.8 + t * b.spd * 1.2) * (b.amp * 0.25);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - thickness, 0, baseY + thickness);
        grad.addColorStop(0,    `rgba(${b.r},${b.g},${b.b},0)`);
        grad.addColorStop(0.45, `rgba(${b.r},${b.g},${b.b},${b.op})`);
        grad.addColorStop(1,    `rgba(${b.r},${b.g},${b.b},0)`);

        ctx.fillStyle = grad;
        ctx.fill();
      });

      t += 0.008;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: "hsl(220,22%,4.5%)" }}>

      {/* Canvas — faint teal wave, upper region only */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Single soft teal glow — top-left, very low opacity */}
      <div
        className="absolute"
        style={{
          width: "70vw",
          height: "55vh",
          top: "-20vh",
          left: "-10vw",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at 45% 50%, rgba(47,214,176,0.10) 0%, transparent 65%)",
          filter: "blur(90px)",
          animation: "auroraGlow 22s ease-in-out infinite alternate",
        }}
      />

      {/* Noise grain — very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.025,
        }}
      />

      {/* Bottom fade — grounds the layout */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(220,22%,4.5%) 0%, transparent 100%)" }}
      />

      <style>{`
        @keyframes auroraGlow {
          0%   { transform: translate(0, 0)     scale(1);    opacity: 1; }
          50%  { transform: translate(6vw, 5vh) scale(1.1);  opacity: 0.8; }
          100% { transform: translate(-4vw,3vh) scale(0.95); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default AuroraBackground;