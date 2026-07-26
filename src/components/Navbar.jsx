import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    }

    return (
        <header className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow">

            <h1 className="text-xl font-bold">
                💧 Hydration Tracker
            </h1>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
                Logout
            </button>

        </header>
    );
}

export default Navbar;