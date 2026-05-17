import { Outlet } from "react-router";
import Navbar from "../../component/layout/Navbar/Navbar";
import Sidebar from "../../component/layout/Sidebar/Sidebar";

export default function AdminDashboard() {
    return(<>
        <Navbar />
        <div className="d-flex flex-row">
            
            <Sidebar />

            <main className="w-100">
                <Outlet />
            </main>

        </div>
    </>)
}