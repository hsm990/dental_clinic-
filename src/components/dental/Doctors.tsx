import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";
import d3 from "@/assets/doctor-3.jpg";
import d4 from "@/assets/doctor-4.jpg";

const doctors = [
  { img: d3, name: "Dr. Sarah Benali", spec: "Orthodontist", bio: "Specializing in bite correction and aesthetic alignment" },
  { img: d2, name: "Dr. Yacine Meftah", spec: "Cosmetic Dentistry", bio: "With advanced training in smile design and veneers" },
  { img: d1, name: "Dr. Lina Boussad", spec: "Pediatric Care", bio: "Creating positive dental experiences for children" },
  { img: d4, name: "Dr. Karim Benaissa", spec: "Implantology", bio: "Precision implant placement with 15+ years experience" },
];

export function Doctors() {
  return (
    <section className="section doctors" id="doctors" style={{ backgroundColor: "#eef5f8" }}>
      <div className="container">
        <div className="docs-head">
          <div>
            <span className="eyebrow">The Team</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              Exceptional Dentists,<br /><em>Compassionate Care.</em>
            </h2>
          </div>
          <p>
            A small, dedicated team — trained internationally and united by a shared
            commitment to excellence and patient comfort.
          </p>
        </div>

        <div className="docs-grid">
          {doctors.map((d) => (
            <div className="doc reveal" key={d.name}>
              <div className="doc-img"><img src={d.img} alt={d.name} loading="lazy" /></div>
              <div className="doc-body">
                <div className="spec">{d.spec}</div>
                <h4>{d.name}</h4>
                <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{d.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
