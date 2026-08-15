import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {


    const date = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (

        <header className="bg-slate-200 shadow-sm rounded-xl px-8 py-5 flex justify-between items-center">

            <div>


                <h1 className="text-2xl font-bold text-blue-600">

                    💧 Hydration Tracker

                </h1>

                <p className="text-gray-500 mt-5 ml-5">

                    {date}

                </p>

            </div>

            <div className="flex items-center gap-6">

                <button className="relative">

                    <FaBell className="text-2xl text-gray-600 hover:text-blue-600 transition" />

                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />

                </button>

                <FaUserCircle className="text-4xl text-blue-600" />


            </div>

        </header>

    );

}

export default Navbar;