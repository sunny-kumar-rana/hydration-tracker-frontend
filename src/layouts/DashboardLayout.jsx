import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="min-h-screen bg-slate-100">

            <Navbar
                onMenuClick={() => setSidebarOpen(true)}
            />

            <div className="flex">

                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 bg-slate-100 min-h-screen">

                    {children}

                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;