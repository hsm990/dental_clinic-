export function Navbar() {
  return (
    <header className="nav-wrap" >
      <div className="container nav">
        <a href="#" className="nav-logo">
          <div className="logo-mark">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="logo-text">El Hayat</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Our Doctors</a></li>
            <li><a href="#treatments">Transformations</a></li>
            <li><a href="#reviews">Stories</a></li>
            <li><a href="#contact">Visit</a></li>
          </ul>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-primary" href="#book-appointment">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
