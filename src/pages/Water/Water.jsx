import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import {
    addWater,
    deleteWater,
    getHistory,
    updateWater,
} from "../../api/waterApi";
import toast from "react-hot-toast";

function Water() {

    const [amount, setAmount] = useState("");

    const [history, setHistory] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [editingAmount, setEditingAmount] = useState("");

    async function loadHistory() {

        try {

            const res = await getHistory();

            setHistory(res.data);

        } catch (e) {

            console.error(e);

        }

    }

    useEffect(() => {

        loadHistory();

    }, []);

    async function handleSubmit(e) {

        e.preventDefault();

        if (!amount) return;

        await addWater(Number(amount));

        setAmount("");

        loadHistory();

    }

    async function quickAdd(amount) {

        await addWater(amount);

        toast.success("Water added");

        loadHistory();

    }

    async function saveEdit() {

        await updateWater(
            editingId,
            Number(editingAmount)
        );

        toast.success("Water updated");

        setEditingId(null);

        loadHistory();

    }

    async function handleDelete(id) {

        await deleteWater(id);

        toast.success("Water deleted");

        loadHistory();

    }

    return (

        <DashboardLayout>

            <h1 className="text-3xl font-bold mb-6">

                Water Intake

            </h1>

            <div className="flex gap-3 mb-8">

                <button
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                    onClick={() => quickAdd(250)}
                >
                    +250 ml
                </button>

                <button
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                    onClick={() => quickAdd(500)}
                >
                    +500 ml
                </button>

                <button
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                    onClick={() => quickAdd(750)}
                >
                    +750 ml
                </button>

                <button
                    className="bg-blue-500 text-white px-5 py-3 rounded"
                    onClick={() => quickAdd(1000)}
                >
                    +1000 ml
                </button>

            </div>

            <table className="w-full bg-white shadow rounded">

                <thead>

                    <tr className="border-b">

                        <th className="p-4">Amount</th>

                        <th>Consumed At</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.map(water => (

                            <tr
                                key={water.id}
                                className="border-b"
                            >

                                <td>

                                    {
                                        editingId === water.id ?

                                            <input
                                                value={editingAmount}
                                                onChange={(e) => setEditingAmount(e.target.value)}
                                                className="border p-2 rounded w-24"
                                            />

                                            :

                                            `${water.amount} ml`

                                    }

                                </td>

                                <td>

                                    {new Date(
                                        water.consumedAt
                                    ).toLocaleString()}

                                </td>

                                <td>

                                    {
                                        editingId === water.id ?

                                            <button
                                                className="text-green-600 mr-3"
                                                onClick={saveEdit}
                                            >

                                                Save

                                            </button>

                                            :

                                            <button
                                                className="text-blue-600 mr-3"
                                                onClick={() => {

                                                    setEditingId(water.id);

                                                    setEditingAmount(water.amount);

                                                }}
                                            >

                                                Edit

                                            </button>

                                    }

                                    <button
                                        className="text-red-600"
                                        onClick={() => handleDelete(water.id)}
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </DashboardLayout>

    );

}

export default Water;