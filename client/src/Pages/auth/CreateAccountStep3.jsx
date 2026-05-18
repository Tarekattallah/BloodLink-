import React, { useState } from 'react'
import logo from '../../assets/Icon.png'

function CreateAccountStep3() {
  // start logic
  const [formData, setFormData] = useState({
    homeAddress: "",
    donationCenter: "",
    smsAlerts: false,
    newsLetter: false
  });

  const changeHandler = (e)=>{
    const {id, value, type, checked}= e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  }

  const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log("Data to be sent to API:", formData);
  // end logic
 
};
  return (
    <div className='container-fluid vh-100 p-0 overflow-hidden'>
      <div className="row g-0 h-100">
        
        {/* left side*/}
        <div className="col-5 bg-danger d-flex flex-column justify-content-between p-5">
          <div className="logo">
            <div className='d-flex align-items-center text-white'>
              <img src={logo} alt="Logo" style={{ width: '30px' }} className="me-2" />
              <span className="fw-bold fs-4">BloodLink</span>
            </div>
          </div>

          <div className="quote-section text-white">
            <p className="fs-4 lh-base mb-2">
              "Your location is the first step toward saving a life in your own community."
            </p>
            <p className="opacity-75 small">— Dr. Sarah Chen, Chief Medical Officer</p>
          </div>

          <div className="pagination-dots d-flex gap-2">
             <div style={{ width: '35px', height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
             <div style={{ width: '35px', height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}></div>
             <div style={{ width: '35px', height: '4px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/*   right side */}
        <div className="col-7 bg-white">
         
          <form onSubmit={handleSubmit} className=" container d-flex flex-column py-5 px-2 h-100 justify-content-between mx-auto" style={{ maxWidth: '500px' }}>
          <div className="d-flex flex-column py-5  h-100 justify-content-around " style={{ maxWidth: '500px' }}>
            
            {/* Header: Step Info and Progress Bar */}
            <div className="d-flex justify-content-between align-items-center">
              <span className="text-primary fw-bold small" style={{letterSpacing: '1px'}}>STEP 3 OF 3</span>
              <div className="d-flex gap-1">
                <div className="rounded-circle bg-primary" style={{width: '8px', height: '8px'}}></div>
                <div className="rounded-circle bg-primary" style={{width: '8px', height: '8px'}}></div>
                <div className="rounded-pill bg-danger" style={{width: '18px', height: '8px'}}></div>
              </div>
            </div>

            {/* Form Titles */}
            <div className="title-section mb-4 text-center">
                <h2 className='fw-bold mb-1'>Location & Preference</h2>
                <p className="text-muted small">
                Finalize your account to start receiving alerts and booking donation sessions nearby.
                </p>
            </div>

            {/* Form Fields: Address Input */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary small d-block text-center">Home Address</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-secondary">
                    <i className="bi bi-geo-alt"></i>
                </span>
                <input type="text" id = "homeAddress" value={formData.homeAddress} onChange={changeHandler} className="form-control bg-light border-start-0 ps-0" placeholder='123 Health Ave, Medical District' />
              </div>
            </div>

            {/* Form Fields: Center Selection */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-secondary small d-block text-center">Primary Donation Center</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-secondary">
                    <i className="bi bi-hospital"></i>
                </span>
                <select id= "donationCenter" value={formData.donationCenter} onChange={changeHandler} className="form-select bg-light border-start-0 ps-0 text-secondary">
                  <option value="">Select your nearest center</option>
                  <option value="cairo">Cairo Medical center</option>
                </select>
              </div>
            </div>

            {/* Communication Preferences Sub-header */}
            <h6 className="text-secondary fw-bold mt-2 mb-2 text-center" style={{fontSize: '0.7rem', letterSpacing: '1px'}}>
                COMMUNICATION PREFERENCES
            </h6>
            <hr className="my-2" />

            {/* Preference Card 1: SMS */}
            <div className="p-2 mb-2 rounded-3 d-flex align-items-start gap-3" style={{backgroundColor: '#f8f9fa', border:'1px solid #eee'}}>
              <div className="form-check mt-1 ms-2">
                <input id="smsAlerts" checked={formData.smsAlerts} onChange={changeHandler} className="form-check-input" type="checkbox"/>
              </div>
              <div>
                <label htmlFor="smsAlerts" className='fw-bold d-block mb-0' style={{fontSize:'0.9rem'}}>Emergency SMS Alerts</label>
                <small className='text-muted' style={{fontSize:'0.75rem'}}>Receive urgent notifications when your blood type is in demand.</small>
              </div>
            </div>

            {/* Preference Card 2: Newsletter */}
            <div className="p-2 mb-3 rounded-3 d-flex align-items-start gap-3" style={{backgroundColor: '#f8f9fa', border:'1px solid #eee'}}>
              <div className="form-check mt-1 ms-2">
                <input id="newsLetter" checked={formData.newsLetter} onChange={changeHandler} type="checkbox" className="form-check-input" />                  
              </div>
              <div>
                <label htmlFor="newsLetter" className="fw-bold d-block mb-0" style={{fontSize:'0.9rem'}}>Health Newsletter</label>
                <small className="text-muted" style={{fontSize:'0.75rem'}}>Monthly insights on nutrition and the impact of your contributions.</small>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="action-buttons d-flex flex-column mt-2">
                <button type='submit' className="btn fw-bold py-2 text-white mb-2" style={{ backgroundColor: '#a0101b', borderRadius: '8px' }}>
                Complete Registration
                </button>

                <div className="text-center mb-2">
                <a href="#" className="text-decoration-none fw-semibold small">
                    <i className="bi bi-arrow-left me-1"></i> Back to Health Info
                </a>
                </div>
            </div>
            </div>

            {/*  footer */}

            <p className="text-center text-muted mt-2 mb-0" style={{ fontSize: '0.65rem' }}>
              By completing registration, you agree to BloodLink's <a href="#" className='text-primary'>Terms of Service</a> and <a href="#" className='text-primary'>Privacy Policy</a>.
            </p>
          </form> 
        </div>
      </div>
    </div>
  );
}

export default CreateAccountStep3;