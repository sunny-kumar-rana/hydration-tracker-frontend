import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

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

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Login failed"
            );
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg w-96"
            >

                <h1 className="text-3xl font-bold mb-6">
                    Hydration Tracker
                </h1>

                {error && (
                    <p className="text-red-600 mb-4">
                        {error}
                    </p>
                )}

                <input
                    className="border p-3 w-full mb-4 rounded"
                    placeholder="Username"
                    name="username"
                    onChange={handleChange}
                />

                <input
                    className="border p-3 w-full mb-4 rounded"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />

                <button
                    className="bg-blue-600 text-white w-full p-3 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="mt-4 text-center">

                    Don't have an account?

                    <Link
                        className="text-blue-600 ml-1"
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