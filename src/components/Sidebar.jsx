import {
    FaHouse,
    FaGlassWater,
    FaChartColumn,
    FaUser,
    FaRightFromBracket,
    FaXmark
} from "react-icons/fa6";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {

    const navigate = useNavigate();

    function logout() {

        localStorage.removeItem("token");

        navigate("/");

        onClose();

    }

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition
        ${isActive
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-100"
        }`;

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            <aside
                className={`
                    fixed md:sticky top-0 left-0 z-50
                    w-64 h-screen
                    bg-white shadow-lg p-5
                    transform transition-transform duration-300
                    ${isOpen
                        ? "translate-x-0"
                        : "-translate-x-full md:translate-x-0"
                    }
                `}
            >

                {/* Mobile close button */}
                <div className="flex justify-end md:hidden mb-4">

                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-500 text-xl"
                    >
                        <FaXmark />
                    </button>

                </div>

                <nav className="space-y-2">

                    <NavLink
                        to="/dashboard"
                        className={linkClass}
                        onClick={onClose}
                    >
                        <FaHouse />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/water"
                        className={linkClass}
                        onClick={onClose}
                    >
                        <FaGlassWater />
                        Water
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className={linkClass}
                        onClick={onClose}
                    >
                        <FaChartColumn />
                        Statistics
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={linkClass}
                        onClick={onClose}
                    >
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
        </>
    );
}

export default Sidebar;