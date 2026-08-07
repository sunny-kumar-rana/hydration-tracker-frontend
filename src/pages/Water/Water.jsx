import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    addWater,
    deleteWater,
    getHistory,
    updateWater,
} from "../../api/waterApi";
import {
    FaGlassWater,
    FaPen,
    FaTrash,
    FaCheck,
    FaDroplet,
    FaListOl,
} from "react-icons/fa6";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";

function Water() {

    const [amount, setAmount] = useState("");

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    const [editingId, setEditingId] = useState(null);

    const [editingAmount, setEditingAmount] = useState("");

    const todayTotal = history.reduce(
        (sum, water) => sum + water.amount,
        0
    );

    async function loadHistory() {

        try {

            const res = await getHistory();

            setHistory(res.data);

        } catch (e) {

            console.error(e);

            toast.error("Failed to load water history.");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadHistory();

    }, []);

    async function handleSubmit(e) {

        e.preventDefault();

        const value = Number(amount);

        if (!value || value <= 0) {

            toast.error("Enter a valid amount.");

            return;

        }

        try {

            await addWater(value);

            toast.success(`${value} ml added successfully.`);

            setAmount("");

            loadHistory();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to add water."
            );

        }

    }

    async function quickAdd(value) {

        await addWater(value);

        toast.success(`${value} ml added`);

        loadHistory();

    }

    async function saveEdit() {

        await updateWater(
            editingId,
            Number(editingAmount)
        );

        toast.success("Water updated.");

        setEditingId(null);

        setEditingAmount("");

        loadHistory();

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this entry?")) {

            return;

        }

        await deleteWater(id);

        toast.success("Water deleted.");

        loadHistory();

    }

    if (loading) {

        return (

            <DashboardLayout>

                <div className="flex justify-center items-center h-[70vh]">

                    <Spinner />

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Water Intake

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Track today's hydration.

                    </p>

                </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">

                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-6 shadow-lg">

                    <div className="flex items-center gap-4">

                        <FaDroplet className="text-4xl" />

                        <div>

                            <p className="text-blue-100">

                                Today's Intake

                            </p>

                            <h2 className="text-4xl font-bold">

                                {todayTotal} ml

                            </h2>

                        </div>

                    </div>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <div className="flex items-center gap-4">

                        <FaListOl className="text-4xl text-blue-600" />

                        <div>

                            <p className="text-gray-500">

                                Today's Entries

                            </p>

                            <h2 className="text-4xl font-bold">

                                {history.length}

                            </h2>

                        </div>

                    </div>

                </div>

            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

                <h2 className="text-xl font-semibold mb-5">

                    Add Custom Water Intake

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row gap-4"
                >

                    <input
                        type="number"
                        min="1"
                        placeholder="Enter amount (ml)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <Button type="submit">

                        <FaGlassWater className="text-blue-600 text-xl" />

                        Add Water

                    </Button>

                </form>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">

                <h2 className="text-xl font-semibold mb-5">

                    Quick Add

                </h2>

                <div className="flex flex-wrap gap-4">

                    <Button onClick={() => quickAdd(250)}>
                        <FaGlassWater className="text-blue-600 text-xl" />
                        250 ml
                    </Button>

                    <Button onClick={() => quickAdd(500)}>
                        <FaGlassWater className="text-blue-600 text-xl" />
                        500 ml
                    </Button>

                    <Button onClick={() => quickAdd(750)}>
                        <FaGlassWater className="text-blue-600 text-xl" />
                        750 ml
                    </Button>

                    <Button onClick={() => quickAdd(1000)}>
                        <FaGlassWater className="text-blue-600 text-xl" />
                        1000 ml
                    </Button>

                </div>

            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead>

                        <tr className="bg-gray-50 border-b">

                            <th className="p-4 text-left">

                                Amount

                            </th>

                            <th className="p-4 text-left">

                                Consumed At

                            </th>

                            <th className="p-4 text-center">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>
                        {
                            history.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="3"
                                        className="text-center py-16 text-gray-500"
                                    >

                                        <FaDroplet className="mx-auto text-5xl mb-4 text-blue-400" />

                                        <p className="text-lg font-medium">

                                            No water intake recorded today

                                        </p>

                                        <p className="text-sm text-gray-400 mt-2">

                                            Start tracking your hydration by adding your first glass of water.

                                        </p>

                                    </td>

                                </tr>

                            ) : (

                                history.map((water) => (

                                    <tr
                                        key={water.id}
                                        className="border-b hover:bg-blue-50 transition-colors"
                                    >

                                        <td className="p-4">

                                            {

                                                editingId === water.id ?

                                                    <input
                                                        className="border rounded-lg px-3 py-2 w-28"
                                                        value={editingAmount}
                                                        onChange={(e) =>
                                                            setEditingAmount(
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    :

                                                    <span className="font-semibold">

                                                        {water.amount} ml

                                                    </span>

                                            }

                                        </td>

                                        <td className="p-4">

                                            {

                                                new Date(
                                                    water.consumedAt
                                                ).toLocaleString()

                                            }

                                        </td>

                                        <td className="p-4">

                                            <div className="flex justify-center gap-3">

                                                {

                                                    editingId === water.id ?

                                                        <button
                                                            onClick={saveEdit}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
                                                        >

                                                            <FaCheck />

                                                            Save

                                                        </button>

                                                        :

                                                        <button
                                                            onClick={() => {

                                                                setEditingId(
                                                                    water.id
                                                                );

                                                                setEditingAmount(
                                                                    water.amount
                                                                );

                                                            }}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                                                        >

                                                            <FaPen />

                                                            Edit

                                                        </button>

                                                }

                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            water.id
                                                        )
                                                    }
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
                                                >

                                                    <FaTrash />

                                                    Delete

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )

                        }

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}

export default Water;