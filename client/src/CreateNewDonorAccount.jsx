
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';




const BloodTypes = [
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-",
];

const Quotes = [
  { text: "Every drop is a second chance for someone else.", author: "Community Member" },
  { text: "Your donation can be the difference between life and death.", author: "Healthcare Professional" },
  { text: "Be a hero, donate blood and save lives.", author: "Blood Donor" },
  { text: "The gift of blood is the gift of life.", author: "Red Cross Volunteer" },
  { text: "Donate blood, give hope to those in need.", author: "Patient Advocate" },
];

const CreateNewDonorAccount = () => {
  const [ selectBloodType, setSelectBloodType ] = useState( "O+" );
  const [ currentQuote, setCurrentQuote ] = useState( 1 );


  const [ formData, setFormData ] = useState( {
    lastDonation: "",
    fullName: "",
    email: "",
    mobile: "",
  } );

  const handleInput = ( e ) => {
    e.stopPropagation();
    setFormData( { ...formData, [ e.target.name ]: e.target.value } );
  };

  const quotes = [
    { text: "Every drop is a second chance for someone else.", author: "Community Member" },
    { text: "Donating blood is the gift of life itself.", author: "Regular Donor" },
    { text: "One donation can save up to three lives.", author: "Medical Team" },
  ];



  return (
    <>
      <div className=" bg-main-red d-flex p-0 position-relative d-flex flex-column" >

        <div className='row flex-grow-1 m-0' style={ { minHeight: "100vh" } }>

          <div className="left col-12 col-md-4 container me-4 position-relative" style={ { padding: "50px 30px 50px 60px" } }>
            <div className="top container" style={ { marginBottom: "500px" } }>
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
              <div className="notification p-3"
                style={ {
                  backgroundColor: "#ffffff22", color: "#ffffffaa",
                  padding: "10px", borderRadius: "5px", minWidth: "350px", minHeight: "150px"
                } }>
                <p className='mb-3' style={ { fontSize: "14px", width: "75%",minHeight:"50px" } }>
                  { quotes[ currentQuote ].text }
                </p>
                <p>
                  <span style={ { backgroundColor: "#ffffff55", padding: "6px", borderRadius: "50%", marginRight: "10px" } }>
                    <i className="fa-regular fa-user" style={ { fontSize: "12px", marginTop: "-20px" } }></i>
                  </span>
                  <span>
                    { quotes[ currentQuote ].author }
                  </span>
                </p>
              </div>

              <div className="pullets d-flex gap-3 mt-4">
                {
                  quotes.map( ( quote, i ) =>
                    <span className='active'
                      key={ i }
                      onClick={ () => setCurrentQuote( i ) }
                      style={ {
                        height: "5px", width: "35px",
                        cursor: "pointer",
                        backgroundColor: currentQuote === i ? "white" : "#ffffff99",
                        display: "inline-block"
                      } }
                    >
                    </span>
                  )
                }
              </div>

            </div>
          </div>

          <div className="right col bg-white" style={ { padding: "50px 110px" } }>

            <div className="top container">

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

                <div className=" d-flex gap-1 justify-content-between align-content-center flex-wrap">


                  {
                    BloodTypes.map( ( type, index ) => (
                      <div
                        key={ index }
                        className={ `box border-box 
                        py-2 rounded-2 fw-semibold text-contact-info
                        fs-6 text-center flex-grow-1
                        ${ type === selectBloodType ? "bg-steps-info" : "" }`
                        }
                        style={ {
                          flexBasis: "150px", border: type === selectBloodType ?
                            "1px solid var(--color-steps)" : "1px solid transparent"
                        } }
                        onClick={ () => setSelectBloodType( type ) }
                      >
                        { type }
                      </div>
                    ) )
                  }





                </div>

              </div>

            </div>

            <div className="bottom container">
              <form className='d-flex mt-5 justify-content-between mb-4'>
                <div className="date rounded-2 w-100 me-4" >
                  <label htmlFor="lastDonation" className='text-contact'>Last Donation Date</label>
                  <input
                    type="text"
                    id="lastDonation"
                    className='w-100 bg-body-secondary rounded-2'
                    placeholder='mm/dd/yyyy'
                    name="lastDonation" 
                    value={ formData.lastDonation } 
                    onChange={ handleInput } 
                  />
                </div>
                <div className="name w-100">
                  <label htmlFor="fullName" className='text-contact'>Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className='w-100 bg-body-secondary rounded-2'
                    placeholder='As on ID'
                    name="fullName" 
                    value={ formData.fullName } 
                    onChange={ handleInput } 
                  />
                </div>
              </form>

              <hr style={ { color: "#cccccccc" } } />

              <form className='d-flex mt-3 justify-content-between'>
                <div className="email-field rounded-2 w-100 me-4" >
                  <label htmlFor="email" className='text-contact'>Email</label>
                  <input
                    type="email" 
                    id="email"
                    className='w-100 bg-body-secondary rounded-2'
                    placeholder='example@email.com'
                    name="email" 
                    value={ formData.email } 
                    onChange={ handleInput } 
                  />
                </div>
                <div className="name w-100">
                  <label htmlFor="mobile" className='text-contact'>Mobile Number</label>
                  <input
                    type="tel" 
                    id="mobile"
                    className='w-100 bg-body-secondary rounded-2'
                    placeholder='05XXXXXXXX'
                    name="mobile" 
                    value={ formData.mobile } 
                    onChange={ handleInput } 
                  />
                </div>
              </form>

              <Link to={""} className='bg-main-red text-center d-block w-100 py-2 rounded-2 ' style={ { marginTop: "80px", color: "#ffffffcc" } }>
                Next Step <i className="fa-solid fa-arrow-right"></i>
              </Link>

              <Link to={""} className=' d-block w-100 text-center mt-4 text-steps-info bg-white py-2 rounded-2 ' style={ { color: "#ffffffcc" } }>
                <i className="className fa-solid fa-arrow-left"></i> Back
              </Link>

              <Link to={ "" } className=' d-block w-100 text-center text-contact bg-white py-2 rounded-2 ' style={ { marginTop: "100px", color: "#ffffffcc" } }>
                Already have an account? <Link to="/login" className='text-main-red '>Login here</Link>
              </Link>

              <Link to={ "" } className="help d-flex justify-content-center align-items-center"
                style={ { border: "1px solid transparent", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#cccccccc", position: "absolute", bottom: "30px", right: "30px" } }>
                <i className="fa-regular fa-circle-question text-contact" ></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

      <div
        className="d-flex justify-content-between 
        align-items-center footer bg-white text-contact px-5 py-3"
        style={ { fontSize: "14px", color: "#cccccc" } }
      >

        <div className="copy">
          &copy; 2024 BloodLink Platform. LifeStream Medical Group.
        </div>

        <ul className='d-flex gap-3'>
          {["Privacy Policy", "Terms of Service", "Donor Guidelines", "Contact"].map((link) => (
            <li key={link}>
              <Link to={`/${link.split(' ')[0].toLowerCase()}`} className='text-health-info'>{link}</Link>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default CreateNewDonorAccount













/*
{
                    <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px"} }>
                    A+
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6  text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    A-
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    B+
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    B-
                  </div>
                  <div className="box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px", backgroundColor: "#186cbb3a", border: "1px solid #186cbb" } }>
                    O+
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    O-
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    AB+
                  </div>
                  <div className="box border-box py-2 rounded-2 fw-semibold text-contact-info fs-6 text-center flex-grow-1" style={ { flexBasis: "150px" } }>
                    AB-
                  </div> 
                }
                <span className='active' style={ { height: "1px", width: "35px", backgroundColor: "white", display: "inline-block" } }></span>
                <span className='active' style={ { height: "1px", width: "35px", backgroundColor: "#ffffff99", display: "inline-block" } }></span> 
                */