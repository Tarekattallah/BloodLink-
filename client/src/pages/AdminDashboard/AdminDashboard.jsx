import Navbar from "../../component/layout/Navbar/Navbar";
import Sidebar from "../../component/layout/Sidebar/Sidebar";
import ImpactHub from './../community/ImpactHub';

export default function AdminDashboard() {
    return(<>
        <Navbar />
        <div className="d-flex flex-row">
            
            <Sidebar />

            <main>
                <ImpactHub />
            </main>

        </div>
    </>)
}