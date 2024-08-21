import React, { useState } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaAmbulance,
  FaFireExtinguisher,
  FaTree,
  FaTools,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SettingsModal from "./SettingsModal";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function DashBoard() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Current Location");
  const [showMap, setShowMap] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleViewAnimalDetails = () => {
    navigate("/animal-case-reported");
  };

  const handleViewTrafficDetails = () => {
    navigate("/traffic-update");
  };

  const handleViewConstructionDetails = () => {
    navigate("/construction-update");
  };

  const openSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalOpen(false);
  };

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setLocationDropdownOpen(false);
  };

  const handleViewMap = () => {
    setShowMap(!showMap);
  };

  const emergencyContacts = {
    ambulance: "123-456-7890",
    fireRescue: "098-765-4321",
    forestOfficials: "112-233-4455",
    pwd: "223-344-5566",
  };

  return (
    <div className="flex font-poppins items-center justify-center h-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 p-4">
      <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800 rounded-xl shadow-2xl shadow-purple-800 p-8 w-full max-w-screen-xl transform transition-all duration-500 border-purple-700  border-4 ">
        <header className="flex items-center justify-between border-b-4 border-blue-800 pb-4 mb-6">
          <h1 className="text-5xl max-md:text-3xl font-bold text-white animate-pulse">
            Dashboard
          </h1>
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="text-4xl text-teal-400 hover:scale-110 transition duration-300"
            >
              <FaUserCircle />
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-teal-500 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <Link to="/profile">
                    <button className="block px-4 py-2 text-teal-200 hover:bg-teal-500 hover:text-white w-full text-left transition duration-300">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={() => navigate("/login")}
                    className="block px-4 py-2 text-teal-200 hover:bg-teal-500 hover:text-white w-full text-left transition duration-300"
                  >
                    <FaSignOutAlt className="inline mr-2" />
                    Logout
                  </button>
                  <button
                    onClick={openSettingsModal}
                    className="block px-4 py-2 text-teal-200 hover:bg-teal-500 hover:text-white w-full text-left transition duration-300"
                  >
                    Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-white text-center animate-fade-in">
            Provide Alerts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Animal Alert", "Traffic Update", "Other Alert"].map(
              (activity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-xl shadow-lg p-6 text-white transform hover:scale-110 transition duration-300 border-white border-2"
                >
                  <h3 className="text-2xl font-bold">{activity}</h3>
                  <p className="mt-2">
                    Details about {activity.toLowerCase()}.
                  </p>
                  {activity === "Animal Alert" ? (
                    <button
                      onClick={handleViewAnimalDetails}
                      className="mt-4 px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      View Details
                    </button>
                  ) : activity === "Traffic Update" ? (
                    <button
                      onClick={handleViewTrafficDetails}
                      className="mt-4 px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      View Details
                    </button>
                  ) : (
                    <button
                      onClick={handleViewConstructionDetails}
                      className="mt-4 px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      View Details
                    </button>
                  )}
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-white text-center animate-fade-in">
            RECENT ALERTS
          </h2>
          <div className="flex justify-between max-md:justify-center gap-8 max-md:grid grid-rows-2">
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-700 to-teal-900 rounded-xl shadow-lg p-6 text-white w-full md:w-1/2 transform hover:scale-110 transition duration-300 border-white border-2">
              <h3 className="text-2xl font-bold">Alert 1</h3>
              <p className="mt-2">Content for alert 1.</p>
              <button
                onClick={() => navigate("/social-page")}
                className="mt-4 px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Manage Alert
              </button>
            </div>

            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-700 to-teal-900 rounded-xl shadow-lg p-6 text-white w-full md:w-1/2 relative transform hover:scale-110 transition duration-300 border-white border-2">
              <h3 className="text-2xl font-bold">Severe Alert</h3>
              <p className="mt-2">Location Details</p>
              <button className="mt-4 px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                Manage Alert
              </button>
              <button
                onClick={() => alert("Current location enabled")}
                className="mt-4 flex items-center px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
              >
                <FaMapMarkerAlt className="mr-2" />
                Enable Current Location
              </button>
              <div className="relative mt-4">
                <button
                  onClick={toggleLocationDropdown}
                  className="flex items-center px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  {selectedLocation}
                </button>
                {isLocationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-teal-700 border border-teal-500 rounded-lg shadow-lg">
                    <button
                      onClick={() => handleLocationChange("Current Location")}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left transition duration-300"
                    >
                      Current Location
                    </button>
                    <button
                      onClick={() => handleLocationChange("Home Location")}
                      className="block px-4 py-2 hover:bg-gray-100 w-full text-left transition duration-300"
                    >
                      Home Location
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-white text-center animate-fade-in">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Detailed Report", "View Map", "Settings"].map(
              (action, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-xl shadow-lg p-6 text-white transform hover:scale-110 transition duration-300  border-white border-2"
                >
                  <h3 className="text-2xl font-bold">{action}</h3>
                  <p className="mt-2">Details about {action.toLowerCase()}.</p>
                  {action === "View Map" ? (
                    <button
                      onClick={handleViewMap}
                      className="mt-4 px-4 py-2 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      {showMap ? "Hide Map" : "View Map"}
                    </button>
                  ) : action === "Settings" ? (
                    <button
                      onClick={openSettingsModal}
                      className="mt-4 px-4 py-2 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      Open Settings
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate("/alert-graph")}
                      className="mt-4 px-4 py-2 bg-white text-blue-800 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
                    >
                      Report Now
                    </button>
                  )}
                </div>
              )
            )}
          </div>
        </section>

        {showMap && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 rounded-xl shadow-lg p-8 ">
              <h2 className="text-4xl font-semibold mb-6 text-teal-300 text-center">
                Map View
              </h2>
              <MapContainer
                center={[10.231533506317009, 76.40856895224043]}
                zoom={13}
                scrollWheelZoom={true}
                className="h-96 w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]} />
              </MapContainer>
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-white text-center animate-fade-in">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaAmbulance />,
                name: "Ambulance",
                number: "108",
              },
              {
                icon: <FaFireExtinguisher />,
                name: "Fire Rescue",
                number: "101",
              },
              {
                icon: <FaTree />,
                name: "Forest Officials",
                number: "0471-2320637",
              },
              {
                icon: <FaTools />,
                name: "PWD",
                number: "1800-425-7771",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-orange-700 via-orange-800 to-orange-900 rounded-xl shadow-lg p-6 text-white transform hover:scale-110 transition duration-300  border-white border-2"
                onClick={() => (window.location.href = `tel:${contact.number}`)}
              >
                <div className="text-5xl mb-2">{contact.icon}</div>
                <h3 className="text-2xl font-bold">{contact.name}</h3>
                <p className="mt-2">Contact: {contact.number}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-blue-800 pt-4 mt-6">
          <p className="text-center text-gray-400"></p>
        </footer>
      </div>

      {isSettingsModalOpen && <SettingsModal onClose={closeSettingsModal} />}
    </div>
  );
}

export default DashBoard;
