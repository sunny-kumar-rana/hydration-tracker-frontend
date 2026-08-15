import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [error, setError] = useState("");

    const [form, setForm] = useState({
        username: "",
        password: "",
    });


    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            const response = await loginUser(form);

            login(response.data.token);

            toast.success("Login successful");

            navigate("/dashboard");

        } catch (err) {

            const message =
                err.response?.data?.message || "Login failed";

            setError(message);

            toast.error(message);

        }
    }

    return (
        <div className="min-h-screen flex bg-black justify-center items-center ">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-96 w-full max-w-md flex flex-col gap-3"
            >

                <h1 className="text-4xl font-bold text-slate-800">
                    Hydration Tracker
                </h1>

                {error && (
                    <p className="text-red-600 mb-4">
                        {error}
                    </p>
                )}

                <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-black"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />

                <input
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-black"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />

                <button
                    className="w-full bg-black hover:bg-red-700 disabled:bg-slate-700 text-white py-3 rounded-lg transition"
                >
                    Login
                </button>

                <p className="mt-4 text-center">

                    Don't have an account?

                    <Link
                        className="text-slate-700 hover:text-red-700 ml-1 font-bold"
                        to="/register"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>
    );
}

export default Login;