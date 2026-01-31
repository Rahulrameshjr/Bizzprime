export default function App() {
  return (
    <div style={styles.page}>
      {/* Background video */}
      <video
        style={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>

      {/* Ambient background glow */}
      <div style={styles.ambientGlow} />
      {/* Spotlight cone + lamp */}
      <div style={styles.spotlight} />
      <div style={styles.lamp} />

      {/* Main content */}
      <div style={styles.container}>
        <h1 style={styles.logo}>
          <span style={styles.logoText}>Bizzprime</span>
        </h1>

        <p style={styles.tagline}>the business backbone</p>

        <div style={styles.comingSoon}>
          <span>Coming Soon</span>
          <div style={styles.loader}>
            <span style={{ ...styles.dot, animationDelay: "0s" }} />
            <span style={{ ...styles.dot, animationDelay: "0.2s" }} />
            <span style={{ ...styles.dot, animationDelay: "0.4s" }} />
          </div>
        </div>

        
      </div>
      {/* Podium on floor */}
      <div style={styles.podium} />
    </div>
  );
}

/* =========================
   STYLES
   ========================= */

const styles = {
  page: {
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100vw",
    background:
      "linear-gradient(180deg, #000000 0%, #020617 45%, #020617 100%)",
    backgroundSize: "200% 200%",
    animation: "gradientMove 18s ease infinite",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont",
    color: "#d11f1fff",
    position: "relative",
    overflow: "hidden",
  },

  ambientGlow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(56,189,248,0.25), transparent 60%)",
    filter: "blur(140px)",
    opacity: 0.6,
    zIndex: 1,
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },

  container: {
    textAlign: "center",
    zIndex: 1,
    padding: "24px",
    maxWidth: "720px",
  },

  logo: {
    margin: 0,
  },

  logoText: {
    fontSize: "4rem",
    fontWeight: 700,
    letterSpacing: "-1px",
    color: "#ffffff",
    textShadow:
      "0 0 20px rgba(99,102,241,0.35), 0 0 40px rgba(56,189,248,0.25)",
    animation: "logoPulse 4s ease-in-out infinite",
  },

  tagline: {
    marginTop: "10px",
    fontSize: "1rem",
    color: "#94a3b8",
    letterSpacing: "0.08em",
    textTransform: "lowercase",
  },

  comingSoon: {
    marginTop: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontSize: "1rem",
    color: "#e5e7eb",
  },

  loader: {
    display: "flex",
    gap: "6px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#38bdf8",
    opacity: 0,
    animation: "dotPulse 1.4s infinite ease-in-out",
  },

  microCopy: {
    marginTop: "28px",
    fontSize: "0.85rem",
    color: "#64748b",
    opacity: 0.8,
  },
};

/* =========================
   GLOBAL ANIMATIONS
   ========================= */

const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
* {
  margin: 0;
  padding: 0;
  border: 0;
}

html, body {
  margin: 0;
  padding: 0;
}

@keyframes gradientMove {
  0% { background-position: 50% 0%; }
  50% { background-position: 50% 100%; }
  100% { background-position: 50% 0%; }
}

@keyframes logoPulse {
  0%, 100% {
    text-shadow:
      0 0 18px rgba(99,102,241,0.3),
      0 0 36px rgba(56,189,248,0.2);
  }
  50% {
    text-shadow:
      0 0 28px rgba(99,102,241,0.55),
      0 0 52px rgba(56,189,248,0.4);
  }
}

@keyframes dotPulse {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}
`;
document.head.appendChild(styleSheet);
