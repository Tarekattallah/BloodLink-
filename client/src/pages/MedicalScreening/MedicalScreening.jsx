import { useState } from "react";
import styles from "./MedicalScreening.module.css";

export default function MedicalScreening() {
  const donor = {
    name: "Elena Rodriguez",
    id: "#BL-8829-XR",
    bloodType: "O- POSITIVE",
    lastDonation: "Jan 12, 2024",
    status: "Eligible",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABS3ymbLXhpT3zWRHRUu_p3S0GFHvlaqXuxd9GfL3Byc2gQOnmF5LcgIBRcLjPYBKK_6d5VvX0kKNSKNeQXnkfToip8HE5ca2EiCqLFM9kGpTq8lsIqlxPMok_BGkUiMx2x-9bVDc8eQcunkwHysGBf5xe8AcjBnaivdKyvDHEvRStQxt56p3hX-51wJwby3GbMZxQlL4xpwGBXr62MxVVeJ63H3YoY6Th-Im8uFq4MYFnJJ5QGgFBqiuLAK2Y5vGXUjf7Fk7_vik"
  };

  const vitals = [
    { label: 'Hemoglobin (g/dL)', placeholder: '13.5',   type: 'number' },
    { label: 'Blood Pressure',    placeholder: '120/80', type: 'text'   },
    { label: 'Pulse (BPM)',       placeholder: '72',     type: 'number' },
    { label: 'Temp (°C)',         placeholder: '36.6',   type: 'text'   },
  ];

  const [checklist, setChecklist] = useState([
    { icon: "public",    title: "Travel History",        desc: "Recent travel to high-risk malaria or viral endemic zones?",  checked: false },
    { icon: "pill",      title: "Medication Usage",      desc: "Currently taking antibiotics, aspirin, or restricted drugs?", checked: false },
    { icon: "ecg_heart", title: "General Health Status", desc: "Feeling well today? No signs of cold, flu, or fatigue?",      checked: true  },
  ]);

  const toggleCheck = (i) => {
    setChecklist(prev => prev.map((item, idx) => idx === i ? { ...item, checked: !item.checked } : item));
  };

  return (
    <main className={styles.mainCon}>
      <div className="row g-4" style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Left Panel */}
        <div className={`col-12 col-lg-4 ${styles.leftPanel}`}>

          {/* Search */}
          <div className={styles.searchCard}>
            <label className={styles.searchLabel}>Donor Lookup</label>
            <div className="position-relative mb-3">
              <span className={`material-symbols-outlined ${styles.searchIcon}`}>qr_code_scanner</span>
              <input type="text" placeholder="ID or QR Code Scan..." className={styles.searchInput} />
            </div>
            <button className={styles.searchBtn}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span> Search
            </button>
          </div>

          {/* Donor Card */}
          <div className={styles.donorCard}>
            <div className="position-relative">
              <img src={donor.image} alt="donor" className={styles.donorImg} />
              <span className={styles.bloodBadge}>{donor.bloodType}</span>
            </div>
            <div className="p-3">
              <h3 className={styles.donorName}>{donor.name}</h3>
              <p className={styles.donorId}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>id_card</span> ID: {donor.id}
              </p>
              <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                <div>
                  <p className={styles.donorMeta}>Last Donation</p>
                  <p className={styles.donorDate}>{donor.lastDonation}</p>
                </div>
                <div className="ps-3 border-start">
                  <p className={styles.donorMeta}>Status</p>
                  <p className={styles.donorStatus}>{donor.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-12 col-lg-8">
          <div className={styles.assessmentCard}>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center">
              <h2 className={styles.assessmentTitle}>Physical Assessment</h2>
              <span className={styles.caseId}>Case ID: <span style={{ fontFamily: 'Inter, monospace' }}>SCR-0021-94</span></span>
            </div>

            {/* Vitals */}
            <div className="row g-3">
              {vitals.map((v, i) => (
                <div key={i} className="col-6 col-md-3">
                  <label className={styles.vitalLabel}>{v.label}</label>
                  <input type={v.type} placeholder={v.placeholder} className={styles.vitalInput} />
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div>
              <h3 className={styles.checklistTitle}>Screening Checklist</h3>
              <div className="d-flex flex-column gap-3">
                {checklist.map((item, i) => (
                  <div key={i} className={styles.checkItem}>
                    <div className="d-flex gap-3">
                      <span className={`material-symbols-outlined ${styles.checkIcon}`}>{item.icon}</span>
                      <div>
                        <p className={styles.checkTitle}>{item.title}</p>
                        <p className={styles.checkDesc}>{item.desc}</p>
                      </div>
                    </div>
                    <input type="checkbox" checked={item.checked} onChange={() => toggleCheck(i)} className={styles.checkbox} />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className={styles.actionBar}>
              <p className={styles.actionNote}>By authorizing, you confirm that all medical data is accurate and the donor meets all safety protocols.</p>
              <div className="d-flex gap-2">
                <button className={styles.deferBtn}>Defer Donor</button>
                <button className={styles.authorizeBtn}>Authorize for Donation</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}