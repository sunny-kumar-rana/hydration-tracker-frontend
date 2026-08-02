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
                <h2>Loading...</h2>
            </DashboardLayout>
        );
    }

    return (

        <DashboardLayout>

            <h1 className="text-4xl font-bold mb-8">

                Dashboard

            </h1>

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

            <div className="bg-white rounded-xl shadow-md p-6 mt-8">

                <div className="flex justify-between">

                    <h2 className="text-xl font-semibold">

                        Today's Progress

                    </h2>

                    <span className="font-bold">

                        {dashboard.progressPercentage.toFixed(1)}%

                    </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

                    <div
                        className="bg-blue-600 h-4 rounded-full transition-all duration-700"
                        style={{
                            width: `${Math.min(
                                dashboard.progressPercentage,
                                100
                            )}%`
                        }}
                    />

                </div>

            </div>

        </DashboardLayout>

    );
}

function Card({ title, value }) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-gray-500">

                {title}

            </h3>

            <p className="text-3xl font-bold mt-3">

                {value}

            </p>

        </div>

    );

}

export default Dashboard;