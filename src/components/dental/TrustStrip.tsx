const items = ["Cosmetic Dentistry", "Dental Implants", "Teeth Whitening", "Porcelain Veneers", "Endodontics", "Invisalign", "Pediatric Care", "Smile Design"];

export function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <section className="trust" aria-label="Our specialties">
      <div className="marquee" role="marquee">
        {loop.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </section>
  );
}
