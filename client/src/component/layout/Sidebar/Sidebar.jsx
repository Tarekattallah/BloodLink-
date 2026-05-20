<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom'
=======
import { NavLink, Link } from 'react-router-dom'
>>>>>>> 723862ee41cbffd069bb41e8a6affbe7b34513e6
import Styles from './Sidebar.module.css'

export default function Sidebar() {

    const location = useLocation()

    const sideList = [
<<<<<<< HEAD
        { icon: "fa-table-cells-large",    title: "Dashboard",        path: "/" },
        { icon: "fa-briefcase-medical",    title: "Medical Screening", path: "/screening" },
        { icon: "fa-square-poll-vertical", title: "Impact Hub",        path: "/impact" },
        { icon: "fa-clipboard-check",      title: "Eligibility Admin", path: "/eligibility" },
        { icon: "fa-message",              title: "Support Tickets",   path: "/support" }
    ]

    return (<>
=======
        { icon: "fa-table-cells-large",    title: "Dashboard",         path: "/dashboard" },
        { icon: "fa-briefcase-medical",    title: "Medical Screening", path: "/screening" },
        { icon: "fa-square-poll-vertical", title: "Impact Hub",        path: "/impact" },
        { icon: "fa-clipboard-check",      title: "Eligibility Admin", path: "/eligibility" },
        { icon: "fa-message",              title: "Support Tickets",   path: "/support" },
    ]

    return(
>>>>>>> 723862ee41cbffd069bb41e8a6affbe7b34513e6
        <aside className="sidebarCon bg-secondary-subtle">
            <div className={`${Styles.sideBar} d-flex flex-column justify-content-between py-4`}>

                <div className="firstSection">
                    <div className={`${Styles.textCon} d-flex flex-column mb-5 ps-4`}>
                        <span className='fw-bold'>BloodLink Admin</span>
                        <span>Central General Hospital</span>
                    </div>

                    <div className="navCon ps-4">
                        {sideList.map((item, index) => (
<<<<<<< HEAD
                            <Link
                                to={item.path}
                                key={index}
                                className={`${Styles.navItem} ${location.pathname === item.path ? Styles.navItemActive : ''} py-2 px-3 d-flex align-items-center gap-2`}
                            >
                                <i className={`fa-solid ${item.icon}`}></i>
                                <span>{item.title}</span>
                            </Link>
=======
                            <NavLink
                                to={item.path}
                                key={index}
                                className={`${Styles.navItem} py-2 px-3 d-flex align-items-center gap-2`}
                            >
                                <i className={`fa-solid ${item.icon}`}></i>
                                <span>{item.title}</span>
                            </NavLink>
>>>>>>> 723862ee41cbffd069bb41e8a6affbe7b34513e6
                        ))}
                    </div>
                </div>

                <div className={`${Styles.controlCon} d-flex flex-column gap-2`}>
<<<<<<< HEAD
                    <Link to="" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
                        <i className="fa-solid fa-gear"></i>
                        <span>Settings</span>
                    </Link>

                    <Link to="" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
=======
                    <Link to="/settings" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
                        <i className="fa-solid fa-gear"></i>
                        <span>Settings</span>
                    </Link>
                    <Link to="/logout" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
>>>>>>> 723862ee41cbffd069bb41e8a6affbe7b34513e6
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Sign Out</span>
                    </Link>
                </div>

            </div>
        </aside>
<<<<<<< HEAD
    </>)
}
=======
    )
}
>>>>>>> 723862ee41cbffd069bb41e8a6affbe7b34513e6
