import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrafficUpdate() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const location = `Lat: ${latitude}, Long: ${longitude}`;

      const newReport = {
        vehicleNumber,
        description,
        location,
      };

      try {
        const response = await fetch("/api/traffic/reports", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReport),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setVehicleNumber("");
          setDescription("");
        } else {
          console.error("Failed to submit report");
        }
      } catch (error) {
        console.error("Error submitting report:", error);
      }
    });
  };

  const handleCallAmbulance = () => {
    alert("Call 108");
  };

  const handleClearForm = () => {
    setVehicleNumber("");
    setDescription("");
    setIsSubmitted(false);
    setSelectedReport(null);
  };

  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  const closeModal = () => {
    setSelectedReport(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-screen-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Traffic Update
        </h1>
        {isSubmitted ? (
          <div className="text-lg text-gray-600 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-center mb-4">
              Report Submitted
            </h2>
            <p className="text-center">
              Your traffic report has been submitted successfully.
            </p>
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handleClearForm}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Submit Another Report
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-blue-400 dark:text-gray-300">
                Vehicle Number
              </label>
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter the vehicle number"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter a brief description of the traffic issue"
                rows="4"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Submit Report
              </button>
              <button
                type="button"
                onClick={handleCallAmbulance}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
              >
                Call Ambulance
              </button>
            </div>
          </form>
        )}

        {selectedReport && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-screen-md">
              <h2 className="text-2xl font-bold mb-4">Report Details</h2>
              <p>
                <strong>Vehicle Number:</strong> {selectedReport.vehicleNumber}
              </p>
              <p>
                <strong>Description:</strong> {selectedReport.description}
              </p>
              <p>
                <strong>Location:</strong> {selectedReport.location}
              </p>
              <button
                onClick={closeModal}
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrafficUpdate;
