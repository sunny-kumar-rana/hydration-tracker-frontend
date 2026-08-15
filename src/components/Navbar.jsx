import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar({ onMenuClick }) {

    const date = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (

        <header className="bg-slate-200 shadow-sm rounded-xl px-4 sm:px-6 md:px-8 py-4 md:py-5 flex justify-between items-center">

            <div className="flex items-center gap-3 min-w-0">

                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden text-gray-700 text-xl p-2"
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>

                <div className="min-w-0">

                    <h1 className="text-xl sm:text-2xl font-bold text-blue-600 truncate">
                        💧 Hydration Tracker
                    </h1>

                    <p className="text-gray-500 mt-1 sm:mt-2 ml-1 sm:ml-5 text-sm sm:text-base">
                        {date}
                    </p>

                </div>

            </div>

            <div className="flex items-center gap-3 sm:gap-6">

                <button className="relative">

                    <FaBell className="text-xl sm:text-2xl text-gray-600 hover:text-blue-600 transition" />

                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />

                </button>

                <FaUserCircle className="text-3xl sm:text-4xl text-blue-600" />

            </div>

        </header>
    );
}

export default Navbar;