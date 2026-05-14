export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">El Hayat <em>Dental</em></div>
            <p className="footer-tag">A boutique practice dedicated to exceptional dental care in Oran. Where every smile is a work of art.</p>
            <div className="footer-socials" style={{ marginTop: 24 }}>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li>123 Queen Rania Al Abdullah Street,</li>
              <li>Amman, Jordan</li>
              <li><a href="tel:+213541223344">+962 79 555 9999</a></li>
              <li><a href="mailto:hello@elhayat-dental.dz">hello@elhayat-dental.jo</a></li>
            </ul>
          </div>
          <div>
            <h5>Hours</h5>
            <ul>
              <li>Sat – Thu · 09:00 – 19:00</li>
              <li>Friday · Closed</li>
              <li style={{ color: "var(--orange)" }}>Emergency: +213 541 22 33 44</li>
            </ul>
          </div>
          <div>
            <h5>Navigate</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Our Doctors</a></li>
              <li><a href="#treatments">Transformations</a></li>
              <li><a href="#reviews">Stories</a></li>
              <li><a href="#contact">Book Appointment</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} El Hayat Dental — Amman, Jordan</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)" }}>Precision in every smile.</div>
        </div>
      </div>
    </footer>
  );
}
