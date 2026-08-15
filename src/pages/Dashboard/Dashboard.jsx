import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";
import { getDashboard } from "../../api/dashboardApi";
import {
    FaBullseye,
    FaGlassWater,
    FaFire,
    FaTrophy,
    FaListOl,
    FaDroplet
} from "react-icons/fa6";

import { Link } from "react-router-dom";
import {
    FaPlus,
    FaChartLine,
    FaUser
} from "react-icons/fa";

import Spinner from "../../components/Spinner";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchDashboard() {

            try {

                const response = await getDashboard();

                setDashboard(response.data);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        }

        fetchDashboard();

    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex justify-center items-center h-[70vh]">
                    <Spinner />
                </div>
            </DashboardLayout>
        );
    }

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12)
        greeting = "Good Morning";
    else if (hour < 17)
        greeting = "Good Afternoon";

    const tips = [

        "Drink a glass of water immediately after waking up.",

        "Carry a reusable water bottle.",

        "Drink water before every meal.",

        "Increase water intake during workouts.",

        "Don't wait until you're thirsty."

    ];

    const randomTip =
        tips[Math.floor(Math.random() * tips.length)];

    return (

        <DashboardLayout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">
                    {greeting}, {dashboard?.username || "User"} 👋
                </h1>

                <p className="text-blue-100 mt-2">

                    Keep your hydration streak alive today.

                </p>

            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                <DashboardCard
                    title="Daily Goal"
                    value={dashboard.dailyGoal}
                    unit="ml"
                    icon={<FaBullseye />}
                    color="bg-indigo-500"
                />

                <DashboardCard
                    title="Consumed Today"
                    value={dashboard.todayConsumed}
                    unit="ml"
                    icon={<FaGlassWater />}
                    color="bg-blue-500"
                />

                <DashboardCard
                    title="Remaining"
                    value={dashboard.remaining}
                    unit="ml"
                    icon={<FaDroplet />}
                    color="bg-cyan-500"
                />

                <DashboardCard
                    title="Today's Entries"
                    value={dashboard.todayEntries}
                    icon={<FaListOl />}
                    color="bg-orange-500"
                />

                <DashboardCard
                    title="Current Streak"
                    value={dashboard.currentStreak}
                    unit="Days"
                    icon={<FaFire />}
                    color="bg-red-500"
                />

                <DashboardCard
                    title="Longest Streak"
                    value={dashboard.longestStreak}
                    unit="Days"
                    icon={<FaTrophy />}
                    color="bg-yellow-500"
                />

            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg p-6 mt-8">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-xl font-semibold">

                            Today's Progress

                        </h2>

                        <p className="mt-3 text-sm text-blue-100">

                            {dashboard.remaining > 0
                                ? `${dashboard.remaining} ml remaining to reach today's goal`
                                : "You've reached today's goal! 🎉"}

                        </p>

                    </div>

                    <span className="text-3xl font-bold text-blue-900">

                        {dashboard.progressPercentage.toFixed(0)}%

                    </span>

                </div>

                <div className="mt-4 text-lg font-medium">

                    <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

                        <div
                            className="bg-blue-900 h-4 rounded-full transition-all duration-700"
                            style={{
                                width: `${Math.min(
                                    dashboard.progressPercentage,
                                    100
                                )}%`
                            }}
                        />

                    </div>

                    {
                        dashboard.progressPercentage >= 100
                            ? "🎉 Goal Achieved!"
                            : dashboard.progressPercentage >= 75
                                ? "🔥 Almost There!"
                                : dashboard.progressPercentage >= 50
                                    ? "💧 Keep Going!"
                                    : "🥤 Time to Drink Water!"
                    }

                </div>

            </div>

            <div className="mt-8">

                <h2 className="text-2xl font-semibold mb-5">

                    Quick Actions

                </h2>

                <div className="grid md:grid-cols-3 gap-5">

                    <Link
                        to="/water"
                        className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
                    >

                        <FaPlus className="text-3xl text-blue-600 mb-3" />

                        <h3 className="font-semibold">

                            Add Water

                        </h3>

                    </Link>

                    <Link
                        to="/statistics"
                        className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
                    >

                        <FaChartLine className="text-3xl text-green-600 mb-3" />

                        <h3 className="font-semibold">

                            Statistics

                        </h3>

                    </Link>

                    <Link
                        to="/profile"
                        className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
                    >

                        <FaUser className="text-3xl text-purple-600 mb-3" />

                        <h3 className="font-semibold">

                            Profile

                        </h3>

                    </Link>

                </div>

            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6 mt-8">

                <h2 className="font-semibold text-lg mb-2">

                    💡 Hydration Tip

                </h2>

                <p>

                    {randomTip}

                </p>

            </div>


        </DashboardLayout>

    );
}


export default Dashboard;