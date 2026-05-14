import { useRef, useState } from "react";
import before from "@/assets/dirty.png";
import after from "@/assets/clean.png";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  return (
    <section className="section ba" id="treatments" style={{ backgroundColor: "#f4f9fb" }}>
      <div className="container ba-grid">
        <div>
          <span className="eyebrow">The Work</span>
          <h2 className="h-section" style={{ marginTop: 24 }}>
            Before & After<br /><em>Results.</em>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Drag to reveal one of our recent transformations — porcelain veneers
            and professional whitening, designed to look naturally beautiful.
          </p>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn-primary" href="#contact">
              View More Results
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="ba-card"
          ref={ref}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseMove={(e) => { if (dragging.current) move(e.clientX); }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
          onTouchMove={(e) => { if (dragging.current) move(e.touches[0].clientX); }}
          onTouchEnd={() => (dragging.current = false)}
        >
          <img src={before} alt="Before treatment" />
          <div className="ba-after-clip" style={{ width: `${pos}%` }}>
            <img src={after} alt="After treatment" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
          </div>
          <span className="ba-tag before">Before</span>
          <span className="ba-tag after">After</span>
          <div className="ba-handle" style={{ left: `${pos}%` }} />
        </div>
      </div>
    </section>
  );
}
