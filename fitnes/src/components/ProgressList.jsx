import React, { useState, useEffect } from "react";
import axiosClient from "../helpers/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ProgressList = () => {
    const [progress, setProgress] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axiosClient.get("/progress");
                setProgress(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching progress:", error);
                setError("Error fetching progress");
                setLoading(false);
            }
        };
        fetchProgress();
    }, []);

    const showToast = (message) => {
        toast.success(message, {});
    };

    const handleDelete = async (id) => {
        try {
            await axiosClient.delete(`/progress/${id}`);
            showToast("The progress was deleted");

            const response = await axiosClient.get("/progress");
            setProgress(response.data.data);
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data.message);
            }
            console.error("Error deleting progress:", error);
        }
    };

    const handleUpdate = (item) => {
        navigate(`/progress/${item.id}`);
    };

    return (
        <div>
            {loading && <div className="flex justify-center">Loading...</div>}
            {error && (
                <div className="text-center text-red-500">Error: {error}</div>
            )}
            {!loading && !error && (
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Weight</th>
                            <th className="px-4 py-2">Waist</th>
                            <th className="px-4 py-2">Abs</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Created At</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {progress.map(([item]) => {
                            return (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2">
                                        {item.weight}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.waist}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.abs}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {item.status}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {new Date(
                                            item.created_at
                                        ).toLocaleString()}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            onClick={() => handleUpdate(item)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

            <ToastContainer />
        </div>
    );
};

export default ProgressList;
