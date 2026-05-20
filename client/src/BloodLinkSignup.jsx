import { useState } from "react";

const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const quotes = [
  { text: "Every drop is a second chance for someone else.", author: "Community Member" },
  { text: "Donating blood is the gift of life itself.", author: "Regular Donor" },
  { text: "One donation can save up to three lives.", author: "Medical Team" },
];

const Droplet = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 0C9 0 1 8.5 1 13.5C1 17.642 4.686 21 9 21C13.314 21 17 17.642 17 13.5C17 8.5 9 0 9 0Z" fill="white" />
  </svg>
);

export default function BloodLinkSignup() {
  const [selectedBlood, setSelectedBlood] = useState("O+");
  const [currentQuote, setCurrentQuote] = useState(0);
  const [formData, setFormData] = useState({
    lastDonation: "",
    fullName: "",
    email: "",
    mobile: "",
  });
  const step = 2;

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
      />
      <style>{`
        body { margin: 0; }
        .left-panel {
          background: linear-gradient(160deg, #C62828 0%, #E53935 50%, #B71C1C 100%);
          min-height: 100vh;
        }
        .quote-card {
          background: rgba(255,255,255,0.13);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 14px;
          backdrop-filter: blur(6px);
        }
        .dot-bar {
          height: 4px; width: 28px; border-radius: 2px;
          background: rgba(255,255,255,0.3);
          cursor: pointer; transition: background 0.2s;
        }
        .dot-bar.active { background: #fff; }
        .blood-btn {
          border: 1.5px solid #dee2e6;
          background: #fff; color: #374151;
          font-weight: 600; font-size: 13px;
          border-radius: 8px; padding: 8px 4px;
          width: 100%; transition: all 0.15s; cursor: pointer;
        }
        .blood-btn:hover { border-color: #E53935; color: #E53935; }
        .blood-btn.selected {
          border: 2px solid #E53935;
          background: #fff5f5; color: #E53935;
        }
        .step-label { color: #E53935; font-weight: 700; font-size: 12px; letter-spacing: 1px; }
        .progress { height: 4px; }
        .progress-bar-red { background-color: #E53935; }
        .form-control:focus, .form-select:focus {
          border-color: #E53935;
          box-shadow: 0 0 0 3px rgba(229,57,53,0.12);
        }
        .btn-bloodlink {
          background: #E53935; color: #fff;
          border: none; border-radius: 10px;
          font-weight: 600; font-size: 15px; padding: 13px;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-bloodlink:hover { background: #C62828; color: #fff; transform: translateY(-1px); }
        .link-red { color: #E53935; text-decoration: none; }
        .link-red:hover { color: #C62828; text-decoration: underline; }
        .phone-flag {
          background: #f8f9fa; border-right: 1px solid #dee2e6;
          padding: 0 10px; font-size: 16px;
        }
        .footer-link { color: #9ca3af; text-decoration: none; font-size: 11px; }
        .footer-link:hover { color: #E53935; }
        .avatar-circle {
          width: 30px; height: 30px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
      `}</style>

      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div className="row g-0 flex-grow-1">

          {/* LEFT PANEL */}
          <div className="col-12 col-md-5 col-lg-4 left-panel d-flex flex-column p-4 p-lg-5">

            {/* Logo */}
            <div className="d-flex align-items-center gap-2 mb-5">
              <Droplet />
              <span className="fw-bold text-white fs-5" style={{ fontFamily: "Georgia, serif" }}>
                BloodLink
              </span>
            </div>

            {/* Hero */}
            <div className="flex-grow-1">
              <h1 className="text-white fw-bold lh-sm mb-3" style={{ fontSize: "clamp(28px,4vw,44px)", fontFamily: "Georgia, serif" }}>
                Create New<br />Donor Account
              </h1>
              <p className="text-white-50 lh-lg" style={{ fontSize: "14px" }}>
                Join our community of lifesavers. A few simple steps to separate you from contributing to saving lives.
              </p>
            </div>

            {/* Quote Card */}
            <div className="quote-card p-3 mt-auto mb-3">
              <div className="text-white opacity-50 fs-1 lh-1 mb-1" style={{ fontFamily: "Georgia, serif" }}>"</div>
              <p className="text-white fst-italic mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                {quotes[currentQuote].text}
              </p>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar-circle">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="6" r="3" fill="rgba(255,255,255,0.6)" />
                    <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-white-50" style={{ fontSize: "12px" }}>{quotes[currentQuote].author}</span>
              </div>
            </div>

            {/* Dots */}
            <div className="d-flex gap-2">
              {quotes.map((_, i) => (
                <div key={i} className={`dot-bar ${i === currentQuote ? "active" : ""}`} onClick={() => setCurrentQuote(i)} />
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column bg-white">

            {/* Progress */}
            <div className="px-4 px-lg-5 pt-4 border-bottom">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="step-label">STEP {step} OF 3</span>
                <span className="text-muted" style={{ fontSize: "12px" }}>Health Information</span>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar progress-bar-red" style={{ width: `${(step / 3) * 100}%`, transition: "width 0.4s" }} />
              </div>
            </div>

            {/* Form */}
            <div className="px-4 px-lg-5 py-4 flex-grow-1 overflow-auto">
              <h5 className="fw-bold mb-1" style={{ fontFamily: "Georgia, serif", color: "#111827" }}>
                Medical &amp; Contact Info
              </h5>
              <p className="text-muted mb-4" style={{ fontSize: "13px" }}>
                Tell us a bit more about your donation eligibility and how we can reach you.
              </p>

              {/* Blood Type */}
              <div className="mb-3">
                <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>Blood Type</label>
                <div className="row row-cols-4 g-2">
                  {bloodTypes.map((type) => (
                    <div className="col" key={type}>
                      <button
                        className={`blood-btn ${selectedBlood === type ? "selected" : ""}`}
                        onClick={() => setSelectedBlood(type)}
                      >
                        {type}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Last Donation + Full Name */}
              <div className="row g-3 mb-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>Last Donation Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastDonation"
                    placeholder="mm/dd/yyyy"
                    value={formData.lastDonation}
                    onChange={handleInput}
                    style={{ fontSize: "13px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="As on ID"
                    value={formData.fullName}
                    onChange={handleInput}
                    style={{ fontSize: "13px" }}
                  />
                </div>
              </div>

              {/* Email + Mobile */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleInput}
                    style={{ fontSize: "13px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text phone-flag">🇪🇬</span>
                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                      placeholder="05XXXXXXXX"
                      value={formData.mobile}
                      onChange={handleInput}
                      style={{ fontSize: "13px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button className="btn btn-bloodlink w-100 mb-3">
                Next Step &nbsp;→
              </button>

              {/* Back */}
              <div className="text-center mb-3">
                <a href="#" className="link-red" style={{ fontSize: "13px" }}>← Back</a>
              </div>

              {/* Login */}
              <p className="text-center text-muted mb-0" style={{ fontSize: "13px" }}>
                Already have an account?{" "}
                <a href="#" className="link-red fw-semibold">Login here</a>
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-top bg-white d-flex flex-wrap justify-content-between align-items-center px-4 px-lg-5 py-2 gap-2">
          <span style={{ fontSize: "11px", color: "#9ca3af" }}>
            © 2024 BloodLink Platform, LifeStream Medical Group.
          </span>
          <div className="d-flex gap-3 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Donor Guidelines", "Contact"].map((l) => (
              <a key={l} href="#" className="footer-link">{l}</a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
