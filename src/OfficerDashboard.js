import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaAmbulance,
  FaFireExtinguisher,
  FaTree,
  FaTools,
  FaBuilding,
  FaTrafficLight,
} from "react-icons/fa";
import "./App.css";

const OfficerDashboard = () => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleViewAlerts = () => {};

  const handleCreateAlert = () => {};

  return (
    <div className="flex flex-col h-screen font-poppins bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-400 to-indigo-600 text-white shadow-md">
        <h1 className="text-3xl font-bold">Officer Dashboard</h1>
        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="text-4xl text-white hover:scale-110 transition duration-300"
          >
            <FaUserCircle />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg">
              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                <FaSignOutAlt className="inline mr-2" />
                Logout
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Settings
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="border-b-4 border-teal-600 mb-6"></div>{" "}
        {/* Header line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Manage Alerts */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Manage Alerts</h2>
            <button
              onClick={handleViewAlerts}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
            >
              View Alerts
            </button>
            <button
              onClick={handleCreateAlert}
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ml-2"
            >
              Create Alert
            </button>
          </div>

          {/* Approve Alerts */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Approve Alerts</h2>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Review Pending Alerts
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-2">
              Rejected Alerts
            </button>
          </div>
        </div>
        <div className="border-t border-teal-600 pt-4 mt-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Wildlife Alerts */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaTree className="text-green-500 mr-2" /> Wildlife Alert
              </h3>
              <p className="mb-4">Details about the wildlife alert.</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                Approve Alert
              </button>
            </div>

            {/* Traffic Alerts */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="text-yellow-500 mr-2" /> Traffic
                Alert
              </h3>
              <p className="mb-4">Details about the traffic alert.</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                Approve Alert
              </button>
            </div>

            {/* Construction Alerts */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaBuilding className="text-blue-500 mr-2" /> Construction Alert
              </h3>
              <p className="mb-4">Details about the construction alert.</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                Approve Alert
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-2">
                PWD Alert
              </button>
            </div>

            {/* PWD Alerts */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FaTools className="text-red-500 mr-2" /> PWD Alert
              </h3>
              <p className="mb-4">Details about the PWD alert.</p>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
                Approve Alert
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-2">
                Rejected Alert
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficerDashboard;
