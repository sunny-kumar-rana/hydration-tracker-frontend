import { NavLink } from "react-router-dom";

const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/water", label: "Water Intake" },
    { path: "/statistics", label: "Statistics" },
    { path: "/profile", label: "Profile" },
];

function Sidebar() {

    return (
        <aside className="w-64 bg-white shadow min-h-screen">

            <div className="p-6 text-xl font-bold border-b">
                Menu
            </div>

            <nav className="flex flex-col">

                {links.map(link => (

                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `p-4 border-b hover:bg-blue-50 ${isActive
                                ? "bg-blue-100 font-bold"
                                : ""
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>

                ))}

            </nav>

        </aside>
    );
}

export default Sidebar;