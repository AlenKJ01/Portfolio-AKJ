const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute w-[800px] h-[600px] rounded-full blur-[120px] top-[-10%] left-[-10%]"
        style={{
          background: 'radial-gradient(circle, hsla(166,55%,49%,0.15), transparent 70%)',
          animation: 'aurora-drift-1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[800px] rounded-full blur-[150px] bottom-[-10%] right-[-5%]"
        style={{
          background: 'radial-gradient(circle, hsla(170,50%,40%,0.12), transparent 70%)',
          animation: 'aurora-drift-2 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[700px] h-[500px] rounded-full blur-[130px] top-[40%] left-[30%]"
        style={{
          background: 'radial-gradient(circle, hsla(160,45%,55%,0.1), transparent 70%)',
          animation: 'aurora-drift-3 10s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default AuroraBackground;
