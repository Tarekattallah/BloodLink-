
import './App.css';
const CreateNewDonorAccount = () => {
  return (
    <>
      <div className="container bg-main-red d-flex p-0 position-relative" >

        <div className="left min-w-25 me-4 position-relative" style={ { padding: "50px 30px 50px 60px" } }>
          <div className="top" style={ {} }>
            <h6 className='d-flex align-items-center'>
              <img src="../src/assets/Container.svg" alt="" className='me-1' style={ { width: "15px" } } />
              <span>BloodLink</span>
            </h6>
            <p className='mb-3 mt-4 fw-medium' style={ { width: "80%", fontSize: "40px", lineHeight: "1.2" } }>
              Create New
              Donor Account
            </p>
            <p className='mt-0 mb-3 fw-medium text-white-50' style={ { fontSize: "16px" } }>
              Join our community of lifesavers. A few simple
              steps to separate you from contributing to saving
              lives.
            </p>
          </div>
          <div className="bottom position-absolute " style={ { bottom: "30px" } }>
            <div className="notification p-3" style={ { backgroundColor: "#ffffff22", color: "#ffffffaa", padding: "10px", borderRadius: "5px" } }>
              <p className='mb-3' style={ { fontSize: "14px", width: "75%" } }>
                "Every drop is a second chance for
                someone else."
              </p>
              <p>
                <span style={ { backgroundColor: "#ffffff55", padding: "6px", borderRadius: "50%", marginRight: "10px" } }>
                  <i className="fa-regular fa-user" style={ { fontSize: "12px", marginTop: "-20px" } }></i>
                </span>
                <span>
                  Community Member
                </span>
              </p>
            </div>
            <div className="pullets d-flex gap-3 mt-4">
              <span className='active' style={ { height: "1px", width: "35px", backgroundColor: "#ffffff99", display: "inline-block" } }></span>
              <span className='active' style={ { height: "1px", width: "35px", backgroundColor: "white", display: "inline-block" } }></span>
              <span className='active' style={ { height: "1px", width: "35px", backgroundColor: "#ffffff99", display: "inline-block" } }></span>
            </div>
          </div>
        </div>

        <div className="right flex-grow-1 bg-white" style={ { padding: "50px 110px" } }>

          <div className="top">

            <div>

              <div className="progress-address d-flex justify-content-between">
                <span className="steps text-steps-info">
                  STEP { 2 } OF { 3 }
                </span>
                <span className="health text-health-info">
                  Health Information
                </span>
              </div>

              <div className="progress-bar w-100 mt-3 bg-progress-bar rounded-pill" style={ { width: "100%", height: "5px" } }>
                <div className="progress bg-main-red rounded-pill" style={ { width: "66.66%", height: "100%" } }>
                </div>
              </div>

            </div>

            <div className="  mt-4 ">
              <p className='mb-1 text-contact-info'>Medical & Contact Info</p>
              <p className='m-0 text-contact'>Tell us a bit more about your donation eligibility and how we can
                reach you.</p>
            </div>

            <div className="blood-type">
              <h6 className='mt-5 text-contact'>Blood Type</h6>

              <div className="types-container d-flex gap-1 justify-content-center align-content-center flex-wrap">

                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  A+
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6  text-center" style={ { width: "150px" } }>
                  A-
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  B+
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  B-
                </div>
                <div className="box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px", backgroundColor:"#186cbb3a",border:"1px solid #186cbb"} }>
                  O+
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  O-
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  AB+
                </div>
                <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center" style={ { width: "150px" } }>
                  AB-
                </div>

              </div>

            </div>





          </div>

          <div className="bottom">
            <form className='d-flex mt-5 justify-content-between mb-4'>
              <div className="date rounded-2 w-100 me-4" >
                <label htmlFor="" className='text-contact'>Last Donation Date</label>
                <input type="text" className='w-100 bg-body-secondary rounded-2' placeholder='mm/dd/yyyy' />
              </div>
              <div className="name w-100">
                <label htmlFor="" className='text-contact'>Full Name</label>
                <input type="text" className='w-100 bg-body-secondary rounded-2' placeholder='As on ID' />
              </div>
            </form>

            <hr style={ { color: "#cccccccc" } } />

            <form className='d-flex mt-3 justify-content-between'>
              <div className="date rounded-2 w-100 me-4" >
                <label htmlFor="" className='text-contact'>Email</label>
                <input type="text" className='w-100 bg-body-secondary rounded-2' placeholder='example@email.com' />
              </div>
              <div className="name w-100">
                <label htmlFor="" className='text-contact'>Mobile Number</label>
                <input type="text" className='w-100 bg-body-secondary rounded-2' placeholder='05XXXXXXXX' />
              </div>
            </form>

            <button className='bg-main-red d-block w-100 py-2 rounded-2 ' style={ { marginTop: "80px", color: "#ffffffcc" } }>
              Next Step <i class="fa-solid fa-arrow-right"></i>
            </button>

            <button className=' d-block w-100 mt-4 text-steps-info bg-white py-2 rounded-2 ' style={ { color: "#ffffffcc" } }>
              <i class="fa-solid fa-arrow-left"></i> Back
            </button>

            <button className=' d-block w-100 text-contact bg-white py-2 rounded-2 ' style={ { marginTop: "100px", color: "#ffffffcc" } }>
              Already have an account? <a href="" className='text-main-red '>Login here</a>
            </button>

            <button className="help" style={ { border: "1px solid transparent", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#cccccccc", position: "absolute", bottom: "30px", right: "30px" } }>
              <i className="fa-regular fa-circle-question text-contact" ></i>
            </button>

          </div>

        </div>

      </div>  
      <div className="d-flex justify-content-between align-items-center footer container bg-white text-contact px-5 py-3" style={ { fontSize: "14px", color: "#cccccc" } }>
        
        <div className="copy">
          &copy; 2024 BloodLink Platform. LifeStream Medical Group.
        </div>

        <ul className='d-flex gap-3'>
          <li><a href="" className='text-health-info'>Privacy Policy</a></li>
          <li><a href="" className='text-health-info'>Terms of Service</a></li>
          <li><a href="" className='text-health-info'>Donor Guidelines</a></li>
          <li><a href="" className='text-health-info'>Contact</a></li>
        </ul>

      </div>
    </>
  );
};

export default CreateNewDonorAccount



