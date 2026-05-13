import Styles from './Navbar.module.css'
import { Link } from "react-router";

export default function Navbar() {
    return(<>
        <nav className={Styles.navCon}>
            <div className={`d-flex flex-row justify-content-between py-4 px-5`}>
                <Link to="/" className={Styles.logo}>BloodLink</Link>
                
                <div className={`${Styles.linksCon} d-flex flex-row gap-5`}>
                    <Link to="/screening" className={Styles.link}>Screening</Link>
                    <Link to="/Impact" className={Styles.link}>Impact</Link>
                    <Link to="/Deferrals" className={Styles.link}>Deferrals</Link>
                    <Link to="/Support" className={Styles.link}>Support</Link>
                </div>

                <div className="logosCon d-flex flex-row gap-4">
                    <Link to="/notifications" className={Styles.iconLink}><i className="fa-regular fa-bell"></i></Link>
                    <Link to="/profile" className={Styles.iconLink}><i className="fa-regular fa-circle-user"></i></Link>
                </div>

            </div>
        </nav>
    </>)
}