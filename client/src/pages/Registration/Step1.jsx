import Style from './Step1.module.css'
import icon from '../../assets/Icon.png'
import avatar from '../../assets/avatar.png'

export default function Step1() {
  return (
    <div className={`d-flex align-items-center ${Style.main}`}>
          <div className={`d-flex flex-column justify-content-between ${Style.leftside}`}>
            <div className="container">
              <div className={Style.brand}>
              <img src={icon} alt="BloodLink icon" />
                BloodLink
              </div>
              <div className={Style.leftContainer}>
                <h1>Create New Donor Account</h1>
                <p>Join a community of lifesavers. Your contribution helps ensure a steady supply of blood for patients in need within the Central Region.</p>
              </div>
            </div>
            <div className={Style.comment}>
              <blockquote>
                "Donating blood is a simple act that makes a massive impact. BloodLink made my first donation experience incredibly easy."
              </blockquote>
              <div className={`d-flex align-items-center ${Style.commentuser}`}>
                <img src={avatar} />
                <div className="username">
                  Sarah M., Regular Donor
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
