import {
    FaHouse,
    FaGlassWater,
    FaChartColumn,
    FaUser,
    FaRightFromBracket
} from "react-icons/fa6";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem("token");

        navigate("/");

    }

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition
        ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-100"
        }`;

    return (

        <aside className="w-64 min-h-screen bg-white shadow-lg p-5">

            <nav className="space-y-2">

                <NavLink to="/dashboard" className={linkClass}>
                    <FaHouse />
                    Dashboard
                </NavLink>

                <NavLink to="/water" className={linkClass}>
                    <FaGlassWater />
                    Water
                </NavLink>

                <NavLink to="/statistics" className={linkClass}>
                    <FaChartColumn />
                    Statistics
                </NavLink>

                <NavLink to="/profile" className={linkClass}>
                    <FaUser />
                    Profile
                </NavLink>

            </nav>

            <button
                onClick={logout}
                className="mt-10 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
            >
                <FaRightFromBracket />
                Logout
            </button>

        </aside>

    );

}

export default Sidebar;