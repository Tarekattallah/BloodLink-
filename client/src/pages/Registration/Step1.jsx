import Style from './Step1.module.css'
import icon from '../../assets/Icon.png'

export default function Step1() {
  return (
    <div className={`d-flex ${Style.main}`}>
          <div className={Style.leftside}>
            <div className={Style.brand}>
              <img src={icon} alt="BloodLink icon" />
                BloodLink
            </div>
          </div>
    </div>
  )
}
