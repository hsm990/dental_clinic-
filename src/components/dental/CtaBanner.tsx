export function CtaBanner() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Your Best Smile<br /><em>Awaits.</em></h2>
            <p>Schedule a consultation today — includes a complimentary digital scan and personalized care plan.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light" href="#contact">
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
