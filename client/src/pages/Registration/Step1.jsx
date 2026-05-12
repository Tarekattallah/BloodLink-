import { useNavigate } from 'react-router-dom'
import Style from './Step1.module.css'
import icon from '../../assets/Icon.png'
import avatar from '../../assets/avatar.png'

export default function Step1() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <main className={Style.main}>
      <section className={Style.leftside}>
        <div className={Style.brand}>
          <img src={icon} alt="BloodLink icon" />
          <span>BloodLink</span>
        </div>

        <div className={Style.leftContainer}>
          <h1>Create New Donor Account</h1>
          <p>
            Join a community of lifesavers. Your contribution helps ensure a steady supply
            of blood for patients in need within the Central Region.
          </p>
        </div>

        <div className={Style.comment}>
          <blockquote>
            "Donating blood is a simple act that makes a massive impact. BloodLink made my
            first donation experience incredibly easy."
          </blockquote>

          <div className={Style.commentuser}>
            <img src={avatar} alt="Sarah M." />
            <div>Sarah M., Regular Donor</div>
          </div>
        </div>
      </section>

      <section className={Style.rightside}>
        <div className={Style.formShell}>
          <div className={Style.stepbar}>
            <span className={Style.steplabel}>Step 1 of 3</span>
            <span className={Style.steptitle}>Personal Details</span>
          </div>

          <div className={Style.formintro}>
            <h2>Welcome to BloodLink</h2>
            <p>Please provide your basic information to start your donor journey.</p>
          </div>

          <form className={Style.form} onSubmit={handleSubmit}>
            <div className={Style.row}>
              <div className={Style.field}>
                <label className={Style.formlabel} htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  className={Style.formcontrol}
                  id="firstName"
                  placeholder="John"
                  autoComplete="given-name"
                />
              </div>

              <div className={Style.field}>
                <label className={Style.formlabel} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  className={Style.formcontrol}
                  id="lastName"
                  placeholder="Doe"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className={Style.field}>
              <label className={Style.formlabel} htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                className={`${Style.formcontrol} ${Style.dateInput}`}
                id="dob"
                autoComplete="bday"
              />
              <p className={Style.hinttext}>
                Donors must be at least 17 years old (or 16 with parental consent).
              </p>
            </div>

            <div className={Style.row}>
              <div className={Style.field}>
                <label className={Style.formlabel} htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className={Style.formcontrol}
                  id="password"
                  placeholder="********"
                  autoComplete="new-password"
                />
              </div>

              <div className={Style.field}>
                <label className={Style.formlabel} htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={Style.formcontrol}
                  id="confirmPassword"
                  placeholder="********"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <p className={Style.hinttext}>
              Must be at least 8 characters with a mix of letters and numbers.
            </p>

            <div className={Style.checkboxRow}>
              <input className={Style.checkbox} type="checkbox" id="terms" />
              <label className={Style.checkboxLabel} htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and acknowledge the{' '}
                <a href="#">Privacy Policy</a> regarding my medical data.
              </label>
            </div>

            <button type="submit" className={Style.btnnext}>
              <span>Next Step</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          <p className={Style.loginlink}>
            Already have an account?{' '}
            <button type="button" className={Style.linkButton} onClick={() => navigate('/')}>
              Login instead
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}
