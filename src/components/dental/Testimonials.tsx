const reviews = [
  { name: "Amina Khelifi", role: "Invisalign Patient", initials: "AK", quote: "The transformation exceeded my expectations. Every appointment felt like visiting friends who happen to be creating my perfect smile." },
  { name: "Mehdi Belhadj", role: "Veneers & Whitening", initials: "MB", quote: "I've avoided smiling in photos for years. Six months later, I can't stop. The attention to detail here is remarkable." },
  { name: "Nora Zerrouki", role: "Family Care", initials: "NZ", quote: "Dr. Lina has a gift for making children comfortable. My twins actually look forward to their visits now." },
];

export function Testimonials() {
  return (
    <section className="section" id="reviews" style={{ backgroundColor: "#eef5f8" }}>
      <div className="container">
        <div className="tst-head">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What Patients Say</span>
          <h2 className="h-section" style={{ marginTop: 24 }}>
            Stories From<br /><em>Real Patients.</em>
          </h2>
          <p>Words that matter more than any marketing copy.</p>
        </div>
        <div className="tst-grid">
          {reviews.map((r) => (
            <article className="tst" key={r.name}>
              <div className="tst-stars">★★★★★</div>
              <p className="tst-quote">"{r.quote}"</p>
              <div className="tst-foot">
                <div className="tst-avatar">{r.initials}</div>
                <div>
                  <div className="tst-name">{r.name}</div>
                  <div className="tst-role">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
