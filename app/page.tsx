import { ChecklistWorkspace } from "@/components/checklist-workspace";

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
        <a className="header-link" href="https://github.com/ahmedshaban022/ua-ach" target="_blank" rel="noreferrer">
          Star on GitHub <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Pre-flight quality control</p>
          <h1>Ship interfaces<br /><em>everyone</em> can use.</h1>
          <p className="hero-description">
            A practical release checklist for finding accessibility gaps before they reach production.
          </p>
          <div className="hero-actions">
            <a className="start-link" href="#audit">Start the audit <ArrowIcon /></a>
            <span>15 checks · 4 categories · local-first</span>
          </div>
        </div>

        <div className="hero-stamp" aria-label="Designed for thoughtful frontend teams">
          <span>Accessible by default</span>
          <strong>AA</strong>
          <span>Built for the web</span>
        </div>
      </section>

      <ChecklistWorkspace />

      <section className="contribute" aria-labelledby="contribute-title">
        <p className="eyebrow"><span>03</span> Open source</p>
        <div>
          <h2 id="contribute-title">Help make every release more accessible.</h2>
          <p>
            Found a missing check or a clearer way to explain one? Open an issue, suggest an
            improvement, or share Shipshape with a frontend team.
          </p>
          <div className="contribute-actions">
            <a className="start-link" href="https://github.com/ahmedshaban022/ua-ach/issues/new/choose" target="_blank" rel="noreferrer">
              Suggest an improvement <ArrowIcon />
            </a>
            <a className="text-link" href="https://github.com/ahmedshaban022/ua-ach" target="_blank" rel="noreferrer">
              View the repository
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Built for better releases by <a href="https://github.com/ahmedshaban022">Ahmed Shaban</a>.</p>
        <p><a href="https://www.w3.org/WAI/WCAG22/quickref/">WCAG quick reference</a> · Open source</p>
      </footer>
    </main>
  );
}
