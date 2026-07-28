import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getDashboard } from "../../api/dashboardApi";

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <Card
                    title="Daily Goal"
                    value={`${dashboard.dailyGoal} ml`}
                />

                <Card
                    title="Today's Intake"
                    value={`${dashboard.todayConsumed} ml`}
                />

                <Card
                    title="Remaining"
                    value={`${dashboard.remaining} ml`}
                />

                <Card
                    title="Progress"
                    value={`${dashboard.progressPercentage}%`}
                />

                <Card
                    title="Today's Entries"
                    value={dashboard.todayEntries}
                />

                <Card
                    title="Current Streak"
                    value={`${dashboard.currentStreak} Days`}
                />

                <Card
                    title="Longest Streak"
                    value={`${dashboard.longestStreak} Days`}
                />

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