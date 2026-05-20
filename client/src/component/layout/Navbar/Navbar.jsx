import Styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";   // changed from Link to NavLink

export default function Navbar() {
    return(
        <nav className={`${Styles.navCon} bg-light`}>
            <div className={`d-flex flex-row justify-content-between py-4 px-5`}>
                <NavLink to="/dashboard" className={Styles.logo}>BloodLink</NavLink>
                
                <div className={`${Styles.linksCon} d-flex flex-row gap-5`}>
                    <NavLink to="/screening" className={({ isActive }) => `${Styles.link} ${isActive ? Styles.activeLink : ''}`}>Screening</NavLink>
                    <NavLink to="/impact" className={({ isActive }) => `${Styles.link} ${isActive ? Styles.activeLink : ''}`}>Impact</NavLink>
                    <NavLink to="/deferrals" className={({ isActive }) => `${Styles.link} ${isActive ? Styles.activeLink : ''}`}>Deferrals</NavLink>
                    <NavLink to="/support" className={({ isActive }) => `${Styles.link} ${isActive ? Styles.activeLink : ''}`}>Support</NavLink>
                </div>

                <div className="logosCon d-flex flex-row gap-4">
                    <NavLink to="/notifications" className={Styles.iconLink}><i className="fa-regular fa-bell"></i></NavLink>
                    <NavLink to="/profile" className={Styles.iconLink}><i className="fa-regular fa-circle-user"></i></NavLink>
                </div>

            </div>
        </nav>
    )
}