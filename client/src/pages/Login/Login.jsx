import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faRightToBracket, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import login from '../../assets/Login.png'
import Style from './Login.module.css'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={`d-flex ${Style.main}`}>
      <div className={Style.leftside}>
        <img src={login} alt="Blood donation medical equipment" />
        <div className={Style.leftOverlay} />
        
        <div className={Style.leftContent}>
          <div className={Style.brandRow}>
            <span className={Style.brandAccent} />
            <span className={Style.brandName}>BloodLink</span>
          </div>
          <h2 className={Style.heroTitle}>Every drop counts</h2>
          <p className={Style.heroText}>
            Join our community of lifesavers and help us ensure that no one faces a medical
            emergency without hope.
          </p>
          <div className={Style.heroFooter}>
            <span className={Style.heroFooterAccent} />
            <span>LIFESTREAM MEDICAL GROUP</span>
          </div>
        </div>
      </div>

      <div className={`col-12 col-md-7 d-flex align-items-center justify-content-center ${Style.rightside}`}>
        <div className={Style.rightContainer}>
          <h1 className={Style.title}>Login</h1>
          <p className={Style.loginsub}>Login to your account to manage your donations.</p>

          <label className={Style.fieldLabel} htmlFor="emailInput">Email or Donor ID</label>
          <div className={Style.input}>
            <input type="text" placeholder="Email or Donor ID" id="emailInput" />
            <span className={Style.icon}>
              <FontAwesomeIcon icon={faEnvelope} className={Style.inputIcon} />
            </span>
          </div>

          <div className={Style.forgotrow}>
            <label className={Style.fieldLabel} htmlFor="pwInput">Password</label>
            <a href="#" className={Style.forgotLink}>Forgot Password?</a>
          </div>

          <div className={Style.input}>
            <input type={showPassword ? 'text' : 'password'} placeholder="........" id="pwInput" defaultValue="password"/>
            <button type="button" className={Style.icon} title="Show/hide password" onClick={() => setShowPassword((current) => !current)} >
              <FontAwesomeIcon icon={faLock} className={Style.inputIcon} />
            </button>
          </div>

          <div className={Style.rememberwrap}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me on this device</label>
          </div>

          <button className={Style.btnlogin}>
            <span>Login</span>
            <FontAwesomeIcon icon={faRightToBracket} className={Style.loginIcon} />
          </button>

          <div className={Style.divider}>
            <span>OR CONTINUE WITH</span>
          </div>

          <div className={Style.socialRow}>
            <button className={Style.socialBtn}>
              <FontAwesomeIcon icon={faCircleUser} className={Style.socialIconBlue} />
              <span>Social ID</span>
            </button>
            <button className={Style.socialBtn}>
              <FontAwesomeIcon icon={faSuitcaseMedical} className={Style.socialIconRed} />
              <span>Medical Staff</span>
            </button>
          </div>

          <p className={Style.registerText}>
            Don&apos;t have an account? <a href="#" className={Style.registerLink}>Register now</a>
          </p>

          <div className={Style.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Support</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </div>
  )
}
