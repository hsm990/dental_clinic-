import whitening from "@/assets/service-whitening.jpg";
import implants from "@/assets/service-implants.jpg";
import invisalign from "@/assets/service-invisalign.jpg";
import veneers from "@/assets/service-veneers.jpg";
import rootcanal from "@/assets/service-rootcanal.jpg";
import makeover from "@/assets/service-makeover.jpg";

const services = [
  { cls: "svc-1", img: whitening, title: "Teeth Whitening", desc: "Professional whitening that brightens your smile up to 8 shades — safely, gently, and lastingly." },
  { cls: "svc-2", img: implants, title: "Dental Implants", desc: "Titanium implants that restore both function and aesthetics. Your smile, reborn." },
  { cls: "svc-3", img: invisalign, title: "Invisalign", desc: "Clear, custom aligners — effective without the look of traditional braces." },
  { cls: "svc-4", img: veneers, title: "Porcelain Veneers", desc: "Hand-crafted porcelain shells that correct, protect, and beautify." },
  { cls: "svc-5", img: rootcanal, title: "Endodontics", desc: "Modern root canal treatment — comfortable, precise, and tooth-saving." },
  { cls: "svc-6", img: makeover, title: "Smile Design", desc: "A complete reimagining of your smile — blending art and science." },
];

export function Services() {
  return (
    <section className="section" id="services" style={{ backgroundColor: "#f4f9fb" }}>
      <div className="container">
        <div className="services-head">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              Comprehensive Dental<br /><em>Services.</em>
            </h2>
          </div>
          <p>
            From preventive care to complete smile transformations — every treatment
            is precisely planned and delivered with exceptional attention to detail.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article className={`svc ${s.cls} reveal`} key={s.title}>
              <div className="svc-img"><img src={s.img} alt={s.title} loading="lazy" /></div>
              <div className="svc-body">
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <a className="svc-link" href="#contact">
                  Learn more <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
