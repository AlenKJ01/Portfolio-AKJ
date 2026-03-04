const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">

      {/* Aurora gradient layers */}
      <div className="aurora-container">
        <div className="aurora aurora1"></div>
        <div className="aurora aurora2"></div>
        <div className="aurora aurora3"></div>
        <div className="aurora aurora4"></div>
      </div>

      {/* ⭐ subtle spotlight behind hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(45,212,191,0.08), transparent 60%)"
        }}
      />

      {/* grain texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

    </div>
  );
};

export default AuroraBackground;