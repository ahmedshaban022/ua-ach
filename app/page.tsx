const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shipshape home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Shipshape</span>
        </a>
        <a className="header-link" href="https://github.com/ahmedshaban022/ua-ach">
          View source <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Pre-flight quality control</p>
          <h1>Ship interfaces<br /><em>everyone</em> can use.</h1>
          <p className="hero-description">
            A practical release checklist for finding accessibility gaps before they reach production.
          </p>
        </div>

        <div className="hero-stamp" aria-label="Designed for thoughtful frontend teams">
          <span>Accessible by default</span>
          <strong>AA</strong>
          <span>Built for the web</span>
        </div>
      </section>

      <section className="workspace-preview" aria-labelledby="workspace-title">
        <div className="preview-heading">
          <p className="eyebrow"><span>02</span> Audit workspace</p>
          <h2 id="workspace-title">Release confidence,<br />item by item.</h2>
        </div>
        <div className="preview-card">
          <p>Interactive checklist arriving in the next release.</p>
          <span className="status-pill"><i /> Foundation ready</span>
        </div>
      </section>

      <footer>
        <p>Built for better releases.</p>
        <p>Open source · 2026</p>
      </footer>
    </main>
  );
}

