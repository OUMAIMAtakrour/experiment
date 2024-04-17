import React, { useState } from "react";
import { useEffect } from "react";
import axiosClient from "../helpers/axios";
import { useNavigate, useParams } from "react-router-dom";

import { useStateContext } from "../Contexts/ContextProvider";
import { v4 as uuidv4 } from "uuid";

const ProgressForm = () => {
    const { showToast } = useStateContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const [progress, setProgress] = useState({
        weight: "",
        waist: "",
        abs: "",
        status: "incomplete",
        logs: [],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (id) {
            setLoading(true);
            axiosClient.get(`/progress/${id}`).then(({ data }) => {
                setProgress(data.data);
                setLoading(false);
            });
        }
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = null;
            if (id) {
                res = await axiosClient.put(`/progress/${id}`, progress);
            } else {
                res = await axiosClient.post("/progress", progress);
            }
            console.log("Progress created/updated:", res.data);
            if (id) {
                showToast("The progress was updated");
            } else {
                showToast("The progress was created");
            }
            navigate("/progress");
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data.message);
            }
            console.error("Error creating/updating progress:", error);
        }
    };

    const onDelete = async () => {
        try {
            await axiosClient.delete(`/progress/${id}`);
            showToast("The progress was deleted");
            navigate("/progress");
        } catch (error) {
            if (error && error.response) {
                setError(error.response.data.message);
            }
            console.error("Error deleting progress:", error);
        }
    };

    const addLog = () => {
        progress.logs.push({
            id: uuidv4(),
            date: new Date().toISOString().slice(0, 10),
            weight: "",
            waist: "",
            abs: "",
        });
        setProgress({ ...progress });
    };

    const updateLog = (index, field, value) => {
        progress.logs[index][field] = value;
        setProgress({ ...progress });
    };

    return (
        <div>
            {loading && <div className="flex justify-center">Loading...</div>}
            {error && (
                <div className="text-center text-red-500">Error: {error}</div>
            )}
              <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        value={progress.weight}
                        onChange={(e) => setProgress({ ...progress, weight: e.target.value })}
                        step="0.01"
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="waist" className="block text-sm font-medium text-gray-700">Waist:</label>
                    <input
                        type="number"
                        id="waist"
                        value={progress.waist}
                        onChange={(e) => setProgress({ ...progress, waist: e.target.value })}
                        step="0.01"
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="abs" className="block text-sm font-medium text-gray-700">Abs:</label>
                    <input
                        type="number"
                        id="abs"
                        value={progress.abs}
                        onChange={(e) => setProgress({ ...progress, abs: e.target.value })}
                        step="0.01"
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
                    <select
                        id="status"
                        value={progress.status}
                        onChange={(e) => setProgress({ ...progress, status: e.target.value })}
                        required
                        className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                    Save Progress
                </button>
            </form>
        </div>
        </div>
    );
};

export default ProgressForm;
