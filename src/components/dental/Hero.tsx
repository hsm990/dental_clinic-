import tooth from "@/assets/tooth-1.png";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <h1 className="h-section">
            Where science <br />
            meets <span>artistry</span>
          </h1>

          <p>
            Premium aesthetic dental care crafted with precision,
            comfort and a naturally beautiful smile.
          </p>
        </div>

        <div className="hero-center">
          <img src={tooth} alt="Dental tooth" />
        </div>

        <div className="hero-right">
          <h2 className="h-section" style={{ fontSize: "65px" }}>
            Luxury care <br />
            made personal
          </h2>

          <a className="btn btn-primary" href="#book-appointment" style={{ padding: "15px 35px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book Now
          </a>
        </div>

      </div>

      <div className="hero-bottom-text">
        EL HAYAT SMILE .
      </div>
    </section>
  );
}