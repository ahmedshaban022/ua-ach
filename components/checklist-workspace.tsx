"use client";

import { useEffect, useState } from "react";
import { categories, checklist, type CategoryFilter } from "@/lib/checklist";

const STORAGE_KEY = "shipshape-audit-v1";

type StoredAudit = {
  project?: string;
  completed?: string[];
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
      <path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="17" height="17">
      <rect x="8" y="8" width="11" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16 8V5H5v11h3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ChecklistWorkspace() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [project, setProject] = useState("");
  const [filter, setFilter] = useState<CategoryFilter>("All");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hydrate = window.setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as StoredAudit;
        setProject(stored.project ?? "");
        setCompleted(new Set(stored.completed ?? []));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setReady(true);
      }
    }, 0);

    return () => window.clearTimeout(hydrate);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ project, completed: [...completed] }));
  }, [completed, project, ready]);

  const visibleItems = checklist.filter((item) => filter === "All" || item.category === filter);

  const completedCount = completed.size;
  const percentage = Math.round((completedCount / checklist.length) * 100);

  function toggleItem(id: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function resetAudit() {
    setCompleted(new Set());
    setProject("");
    setFilter("All");
  }

  async function copyReport() {
    const remaining = checklist.filter((item) => !completed.has(item.id));
    const report = [
      `Shipshape accessibility audit${project ? ` — ${project}` : ""}`,
      `${completedCount}/${checklist.length} checks complete (${percentage}%).`,
      remaining.length ? `Remaining:\n${remaining.map((item) => `- ${item.title}`).join("\n")}` : "Ready to ship.",
    ].join("\n\n");

    try {
      await navigator.clipboard.writeText(report);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    window.setTimeout(() => setCopyStatus("idle"), 1800);
  }

  return (
    <section className="audit" id="audit" aria-labelledby="audit-title">
      <div className="audit-intro">
        <p className="eyebrow"><span>02</span> Audit workspace</p>
        <h2 id="audit-title">Release confidence,<br />item by item.</h2>
        <p className="audit-note">Your progress stays in this browser. No account, tracking, or upload.</p>
      </div>

      <div className="audit-panel">
        <div className="audit-toolbar">
          <label className="project-field">
            <span>Project name</span>
            <input
              value={project}
              onChange={(event) => setProject(event.target.value)}
              placeholder="e.g. Checkout redesign"
              maxLength={60}
            />
          </label>

          <div className="progress-block" aria-live="polite">
            <div className="progress-label">
              <span>Release score</span>
              <strong>{percentage}%</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <span style={{ width: `${percentage}%` }} />
            </div>
            <p>{completedCount} of {checklist.length} checks complete</p>
          </div>
        </div>

        <div className="filter-row" aria-label="Filter checks by category">
          {categories.map((category) => (
            <button
              className={filter === category ? "filter-button is-active" : "filter-button"}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="check-list">
          {visibleItems.map((item, index) => {
            const isComplete = completed.has(item.id);
            return (
              <article className={isComplete ? "check-item is-complete" : "check-item"} key={item.id}>
                <button
                  className="check-toggle"
                  type="button"
                  aria-pressed={isComplete}
                  aria-label={`${isComplete ? "Mark incomplete" : "Mark complete"}: ${item.title}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <CheckIcon />
                </button>
                <span className="check-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="check-copy">
                  <div className="check-title-row">
                    <h3>{item.title}</h3>
                    <span className={item.level === "Essential" ? "level essential" : "level"}>{item.level}</span>
                  </div>
                  <p>{item.detail}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="audit-actions">
          <button className="secondary-button" type="button" onClick={resetAudit}>Reset audit</button>
          <button className="primary-button" type="button" onClick={copyReport}>
            <CopyIcon /> {copyStatus === "copied" ? "Report copied" : copyStatus === "failed" ? "Copy failed" : "Copy report"}
          </button>
        </div>
      </div>
    </section>
  );
}
