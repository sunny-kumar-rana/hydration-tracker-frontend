import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../api/authApi";
import toast from "react-hot-toast";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {

            await registerUser({
                username: form.username,
                email: form.email,
                password: form.password
            });

            toast.success("Registration successful");

            navigate("/");

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Registration Failed"
            );

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold mb-6 text-center">

                    Register

                </h1>

                {error && (

                    <p className="text-red-600 mb-4">

                        {error}

                    </p>

                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="border rounded p-3 w-full"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white w-full py-3 rounded"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-5">

                    Already have an account?{" "}

                    <Link
                        to="/"
                        className="text-blue-600"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;