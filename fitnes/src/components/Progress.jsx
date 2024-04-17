import React, { useState, useEffect } from "react";
import axiosClient from "../helpers/axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProgressDetails = () => {
  const { id } = useParams();
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axiosClient.get(`/progress/${id}`);
        setProgress(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching progress:", error);
        setError("Error fetching progress");
        setLoading(false);
      }
    };
    fetchProgress();
  }, [id]);

  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const updateProgress = async () => {
    try {
      const response = await axiosClient.put(`/progress/${id}`, progress);
      setProgress(response.data.data);
      showToast("Progress updated successfully");
    } catch (error) {
      console.error("Error updating progress:", error);
      setError("Error updating progress");
    }
  };

  const handleInputChange = (field, value) => {
    setProgress((prevProgress) => ({
      ...prevProgress,
      [field]: value,
    }));
  };

  return (
    <div>
      {loading && <div className="flex justify-center">Loading...</div>}
      {error && (
        <div className="text-center text-red-500">Error: {error}</div>
      )}
      {!loading && !error && progress && (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Progress Details</h2>
          <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              value={progress.weight}
              onChange={(e) => handleInputChange("weight", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="waist">Waist:</label>
            <input
              type="number"
              id="waist"
              value={progress.waist}
              onChange={(e) => handleInputChange("waist", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="abs">Abs:</label>
            <input
              type="number"
              id="abs"
              value={progress.abs}
              onChange={(e) => handleInputChange("abs", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              value={progress.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="created_at">Created At:</label>
            <input
              type="text"
              id="created_at"
              value={new Date(progress.created_at).toLocaleString()}
              disabled
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={updateProgress}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Update
            </button>
            <button
              onClick={() => navigate("/progress")}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressDetails;