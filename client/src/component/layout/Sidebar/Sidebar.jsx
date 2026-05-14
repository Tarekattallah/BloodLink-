import {Link} from 'react-router-dom'
import Styles from './Sidebar.module.css'

export default function Sidebar() {

    const sideList = [
        {icon: "fa-table-cells-large", title: "Dashboard"},
        {icon: "fa-briefcase-medical", title: "Medical Screening"},
        {icon: "fa-square-poll-vertical", title: "Impact Hub"},
        {icon: "fa-clipboard-check", title: "Eligibility Admin"},
        {icon: "fa-message", title: "Support Tickets"}
    ]

    return(<>
        <aside className="sidebarCon bg-secondary-subtle">
            <div className={`${Styles.sideBar} d-flex flex-column justify-content-between py-4`}>

                <div className="firstSection">
                    <div className={`${Styles.textCon} d-flex flex-column mb-5 ps-4`}>
                        <span className='fw-bold'>BloodLink Admin</span>
                        <span>Central General Hospital</span>
                    </div>

                    <div className="navCon ps-4">

                        {sideList.map((item, index) => (
                            <div key={index} className={`${Styles.navItem} py-2 px-3 d-flex align-items-center gap-2`}>
                                <i class={`fa-solid ${item.icon}`}></i>
                                <span>{item.title}</span>
                            </div>
                        ))}

                    </div>
                </div>

                <div className={`${Styles.controlCon} d-flex flex-column gap-2 `}>
                    <Link to="" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
                        <i class="fa-solid fa-gear"></i>
                        <span>Settings</span>
                    </Link>

                    <Link to="" className={`${Styles.controlItem} d-flex flex-row gap-2 align-items-center py-2 px-3`}>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Sign Out</span>
                    </Link>
                </div>

            </div>
        </aside>
    </>)
}