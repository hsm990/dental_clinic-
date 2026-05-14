// AppointmentBooking.tsx
import { useState } from "react";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    doctor: string;
    date: string;
    notes: string;
};

const services = [
    "Dental Implants",
    "Teeth Whitening",
    "Porcelain Veneers",
    "Endodontics",
    "Invisalign",
    "Consultation",
];

const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
];

const unavailableSlots = ["11:00", "14:00"];

export default function AppointmentBooking() {
    const [step, setStep] = useState(1);

    const [form, setForm] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        notes: "",
    });

    const [service, setService] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [bookingRef, setBookingRef] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};

        if (form.firstName.trim().length < 2) {
            newErrors.firstName = "Required — at least 2 characters.";
        }

        if (form.lastName.trim().length < 2) {
            newErrors.lastName = "Required — at least 2 characters.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        if (form.phone.replace(/\D/g, "").length < 8) {
            newErrors.phone = "Enter a valid phone number.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};

        if (!service) {
            newErrors.service = "Please select a service.";
        }

        if (!form.date) {
            newErrors.date = "Please choose a date.";
        }

        if (!time) {
            newErrors.time = "Please select a time slot.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const submitBooking = () => {
        const ref = "EH-" + Math.floor(100000 + Math.random() * 900000);

        setBookingRef(ref);

        setTimeout(() => {
            setSubmitted(true);
        }, 1200);
    };

    const formatDate = (date: string) => {
        if (!date) return "—";

        return new Date(date).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const resetBooking = () => {
        setStep(1);

        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            doctor: "",
            date: "",
            notes: "",
        });

        setService("");
        setTime("");
        setErrors({});
        setSubmitted(false);
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="booking-page" id="book-appointment" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem", backgroundColor: "#ffffff" }}>
            <div className="mb-1">
                <h2 className="text-center h-section">Your Best Smile<br /><em>Awaits.</em></h2>
            </div>
            <div className="card">
                {/* LEFT PANEL */}
                <aside className="panel">
                    <div>
                        <div className="panel-logo">
                            <div className="panel-logo-icon">◎</div>
                            <span>El Hayat</span>
                        </div>

                        <h2 className="panel-heading">
                            Book Your <em>Appointment</em>
                        </h2>

                        <p className="panel-sub">
                            Reserve your visit in under 2 minutes. Our team confirms within
                            24 hours.
                        </p>
                    </div>

                    <div className="panel-info">
                        <div className="info-item">
                            <span className="info-label">Location</span>
                            <span className="info-value">
                                123 Queen Rania Al Abdullah Street,
                                <br />
                                Amman, Jordan
                            </span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Opening Hours</span>
                            <span className="info-value">
                                Mon – Sat: 08:00 – 19:00
                            </span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Phone</span>
                            <span className="info-value">+962 79 555 9999</span>
                        </div>
                    </div>
                </aside>

                {/* RIGHT */}
                <div className="form-area">
                    {!submitted ? (
                        <>
                            {/* STEPS */}
                            <div className="steps">
                                <div className={`step ${step >= 1 ? "active" : ""}`}>
                                    <div className="step-num">1</div>
                                    <span>Your Info</span>
                                </div>

                                <div className={`line ${step >= 2 ? "filled" : ""}`} />

                                <div className={`step ${step >= 2 ? "active" : ""}`}>
                                    <div className="step-num">2</div>
                                    <span>Service & Time</span>
                                </div>

                                <div className={`line ${step >= 3 ? "filled" : ""}`} />

                                <div className={`step ${step >= 3 ? "active" : ""}`}>
                                    <div className="step-num">3</div>
                                    <span>Confirm</span>
                                </div>
                            </div>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <div>
                                    <h2 className="title">Personal Details</h2>
                                    <p className="subtitle">
                                        Tell us a bit about yourself so we can prepare for your
                                        visit.
                                    </p>

                                    <div className="row">
                                        <div className="field">
                                            <label>First Name</label>

                                            <input
                                                type="text"
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                className={errors.firstName ? "err" : ""}
                                                placeholder="Amira"
                                            />

                                            <span className="error">{errors.firstName}</span>
                                        </div>

                                        <div className="field">
                                            <label>Last Name</label>

                                            <input
                                                type="text"
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                className={errors.lastName ? "err" : ""}
                                                placeholder="Benali"
                                            />

                                            <span className="error">{errors.lastName}</span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="field">
                                            <label>Email</label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className={errors.email ? "err" : ""}
                                                placeholder="amira@example.com"
                                            />

                                            <span className="error">{errors.email}</span>
                                        </div>

                                        <div className="field">
                                            <label>Phone</label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className={errors.phone ? "err" : ""}
                                                placeholder="+962 xxx xxx xxx"
                                            />

                                            <span className="error">{errors.phone}</span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label>Preferred Doctor</label>

                                        <select
                                            name="doctor"
                                            value={form.doctor}
                                            onChange={handleChange}
                                        >
                                            <option value="">No preference</option>
                                            <option value="Dr. Karim Benali">
                                                Dr. Karim Benali — Implantology
                                            </option>
                                            <option value="Dr. Leila Mansouri">
                                                Dr. Leila Mansouri — Cosmetic
                                            </option>
                                            <option value="Dr. Yasmine Khelif">
                                                Dr. Yasmine Khelif — Orthodontics
                                            </option>
                                        </select>
                                    </div>

                                    <button
                                        className="btn primary"
                                        onClick={() => {
                                            if (validateStep1()) {
                                                setStep(2);
                                            }
                                        }}
                                    >
                                        Continue →
                                    </button>
                                </div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <div>
                                    <h2 className="title">Service & Timing</h2>

                                    <p className="subtitle">
                                        Choose what you need and when works best for you.
                                    </p>

                                    <label className="service-label">
                                        Select a Service
                                    </label>

                                    <div className="services">
                                        {services.map((item) => (
                                            <button
                                                key={item}
                                                className={`service ${service === item ? "selected" : ""
                                                    }`}
                                                onClick={() => setService(item)}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>

                                    <span className="error">{errors.service}</span>

                                    <div className="row">
                                        <div className="field">
                                            <label>Preferred Date</label>

                                            <input
                                                type="date"
                                                name="date"
                                                min={today}
                                                value={form.date}
                                                onChange={handleChange}
                                                className={errors.date ? "err" : ""}
                                            />

                                            <span className="error">{errors.date}</span>
                                        </div>

                                        <div className="field">
                                            <label>Preferred Time</label>

                                            <div className="slots">
                                                {timeSlots.map((slot) => {
                                                    const unavailable =
                                                        unavailableSlots.includes(slot);

                                                    return (
                                                        <button
                                                            key={slot}
                                                            disabled={unavailable}
                                                            className={`slot ${time === slot ? "selected" : ""
                                                                } ${unavailable ? "unavailable" : ""}`}
                                                            onClick={() => setTime(slot)}
                                                        >
                                                            {slot}
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <span className="error">{errors.time}</span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <label>Notes</label>

                                        <textarea
                                            name="notes"
                                            value={form.notes}
                                            onChange={handleChange}
                                            placeholder="Any concerns, allergies, or special requests…"
                                        />
                                    </div>

                                    <div className="buttons">
                                        <button
                                            className="btn ghost"
                                            onClick={() => setStep(1)}
                                        >
                                            ← Back
                                        </button>

                                        <button
                                            className="btn primary"
                                            onClick={() => {
                                                if (validateStep2()) {
                                                    setStep(3);
                                                }
                                            }}
                                        >
                                            Review Booking →
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <div>
                                    <h2 className="title">Confirm Details</h2>

                                    <p className="subtitle">
                                        Everything look right? Submit your appointment request.
                                    </p>

                                    <div className="summary">
                                        <div className="summary-row">
                                            <span>Name</span>
                                            <strong>
                                                {form.firstName} {form.lastName}
                                            </strong>
                                        </div>

                                        <div className="summary-row">
                                            <span>Contact</span>
                                            <strong>
                                                {form.email} · {form.phone}
                                            </strong>
                                        </div>

                                        <div className="summary-row">
                                            <span>Doctor</span>
                                            <strong>
                                                {form.doctor || "No preference"}
                                            </strong>
                                        </div>

                                        <div className="summary-row">
                                            <span>Service</span>
                                            <strong>{service}</strong>
                                        </div>

                                        <div className="summary-row">
                                            <span>Date & Time</span>
                                            <strong>
                                                {formatDate(form.date)} at {time}
                                            </strong>
                                        </div>

                                        {form.notes && (
                                            <div className="summary-row">
                                                <span>Notes</span>
                                                <strong>{form.notes}</strong>
                                            </div>
                                        )}
                                    </div>

                                    <div className="buttons">
                                        <button
                                            className="btn ghost"
                                            onClick={() => setStep(2)}
                                        >
                                            ← Edit
                                        </button>

                                        <button
                                            className="btn primary"
                                            onClick={submitBooking}
                                        >
                                            Confirm Appointment ✓
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="success">
                            <div className="success-icon">✓</div>

                            <h2>
                                You're <em>Booked!</em>
                            </h2>

                            <p>
                                Your appointment request has been sent. We'll confirm within
                                24 hours.
                            </p>

                            <div className="ref">
                                Reference: <strong>{bookingRef}</strong>
                            </div>

                            <button className="btn outline" onClick={resetBooking}>
                                Make Another Booking
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}