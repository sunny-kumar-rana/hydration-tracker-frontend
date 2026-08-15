import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    getStatistics,
    getWeeklyStatistics,
    getMonthlyStatistics,
} from "../../api/statisticsApi";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

function Statistics() {
    const [statistics, setStatistics] = useState(null);
    const [weekly, setWeekly] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStatistics() {
            try {
                const [statsRes, weeklyRes, monthlyRes] = await Promise.all([
                    getStatistics(),
                    getWeeklyStatistics(),
                    getMonthlyStatistics(),
                ]);

                setStatistics(statsRes.data);
                setWeekly(weeklyRes.data);
                setMonthly(monthlyRes.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadStatistics();
    }, []);

    if (loading) {
        return (
            <DashboardLayout>
                <div className="text-xl font-semibold">
                    Loading Statistics...
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-8">

                <h1 className="text-4xl font-bold">
                    Statistics
                </h1>

                {/* Summary Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <StatCard
                        title="Total Water"
                        value={`${statistics.totalWaterConsumed} ml`}
                    />

                    <StatCard
                        title="Total Entries"
                        value={statistics.totalEntries}
                    />

                    <StatCard
                        title="Average / Entry"
                        value={`${statistics.averagePerEntry.toFixed(2)} ml`}
                    />

                    <StatCard
                        title="Average / Day"
                        value={`${statistics.averagePerDay.toFixed(2)} ml`}
                    />

                    <StatCard
                        title="Highest Intake"
                        value={`${statistics.highestSingleIntake} ml`}
                    />

                    <StatCard
                        title="Goal Achieved Days"
                        value={statistics.goalAchievedDays}
                    />

                    <StatCard
                        title="Current Streak"
                        value={`${statistics.currentStreak} Days`}
                    />

                    <StatCard
                        title="Longest Streak"
                        value={`${statistics.longestStreak} Days`}
                    />

                </div>

                {/* Weekly Chart */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-semibold mb-5">
                        Weekly Water Intake
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <BarChart data={weekly}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="weekStart"
                                tickFormatter={(value) =>
                                    new Date(value).toLocaleDateString()
                                }
                            />

                            <YAxis />

                            <Tooltip />

                            <Legend />

                            <Bar
                                dataKey="totalWater"
                                name="Water (ml)"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

                {/* Monthly Chart */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-semibold mb-5">
                        Monthly Water Intake
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <LineChart data={monthly}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis />

                            <Tooltip />

                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="totalWater"
                                name="Water (ml)"
                            />

                        </LineChart>

                    </ResponsiveContainer>

                </div>

                {/* Monthly Goal Chart */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-2xl font-semibold mb-5">
                        Goal Achieved Per Month
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <BarChart data={monthly}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="month"
                            />

                            <YAxis />

                            <Tooltip />

                            <Legend />

                            <Bar
                                dataKey="goalAchievedDays"
                                name="Goal Days"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>
        </DashboardLayout>
    );
}

function StatCard({ title, value }) {
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

export default Statistics;