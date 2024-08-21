import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "./fontAwesome";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const customIcon = new L.Icon({
  iconUrl: require("./placeholder.png"),
  iconSize: [25, 25],
  iconAnchor: [17, 45],
  popupAnchor: [0, -45],
});

const LocationMarker = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13);
    }
  }, [map, position]);

  return position === null ? null : <Marker position={position} />;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [fullText] = useState("Stay Alert, Stay Safe");
  const [index, setIndex] = useState(0);
  const [userLocation, setUserLocation] = useState(null);
  const [alertLocations, setAlertLocations] = useState([]);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText, fullText]);

  const handleLogin = () => {
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);

          setAlertLocations([
            [10.057127671662323, 76.37132309818395],
            [10.10343682637862, 76.36891984012873],
            [10.2684436, 76.4233217],
          ]);
        },
        (error) => {
          console.error("Error obtaining location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-900 text-white min-h-screen px-6 py-7 flex flex-col gap-10 md:px-10 lg:px-20 lg:py-7">
      <header className="flex justify-between items-center">
        <a href="#">
          <h1 className="font-extrabold text-4xl">PULSE</h1>
        </a>
        <ul className="hidden lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium">
          <li>
            <a href="#">Wildlife Alerts</a>
          </li>
          <li>
            <a href="#">Traffic Alerts</a>
          </li>
          <li>
            <a href="#">Construction Alerts</a>
          </li>
          <li>
            <a href="#">Report Incident</a>
          </li>
        </ul>
        <div className="flex justify-between items-center space-x-3">
          <div className="lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium">
            <a href="/SignUp" onClick={handleSignUp} className="max-lg:hidden">
              Register
            </a>
            <button
              onClick={() =>
                window.open("https://void1234-wildlife.hf.space", "_blank")
              }
              className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out max-lg:hidden"
            >
              Chatbot
            </button>
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
          <div className="lg:hidden">
            <FontAwesomeIcon
              icon="bars"
              className="fa-2x cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      <main className="lg:flex lg:mt-16 lg:gap-16">
        <div className="lg:flex-1 lg:order-1 lg:mt-32 lg:space-y-10 max-lg:space-y-9 text-transform flex flex-col items-center b py-9">
          <div className="text-6xl font-bold leading-tight text-center">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-transparent bg-clip-text">
              <span className="block">{displayedText}</span>
            </div>
          </div>
          <p className="text-center">
            Our community alert system helps you stay informed about wildlife
            invasions, traffic accidents, and construction activities. Report
            incidents, receive real-time alerts, and keep your surroundings
            safe. Whether you're on the road or at home, our platform ensures
            you're always in the know.
          </p>

          <form action="#" className="flex flex-col gap-2 md:flex-col md:gap-6">
            <button
              type="button"
              onClick={getLocation}
              className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out max-md:rounded-md md:rounded-r-md rounded-r-md font-medium whitespace-nowrap"
            >
              Get Alerts
            </button>
            <div className="rounded-md px-3 py-3 text-gray-500 md:w-96 bg-white text-center outline-4 outline-blue-700 shadow-blue-500 shadow-sm">
              <ul>
                <li>Alerts</li>
                <li>--------------</li>
                <li>No Alerts...</li>
                <li>--------------</li>
              </ul>
            </div>
          </form>
        </div>

        {/* Map Section */}
        {!isMobileMenuVisible && (
          <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end image-transform">
            <div className="relative outline outline-blue-500 outline-4 shadow-2xl drop-shadow-2xl shadow-purple-600 lg:h-[600px] lg:w-[600px] w-[300px] h-[300px] max-sm:rounded-md lg:rounded-full overflow-hidden">
              <MapContainer
                center={[10.231533506317009, 76.40856895224043]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker position={userLocation} />
                {alertLocations.map((location, index) => (
                  <Marker key={index} position={location} icon={customIcon} />
                ))}
              </MapContainer>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Menu */}
      {isMobileMenuVisible && (
        <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-brightness-50 flex flex-col items-center justify-center z-50">
          <ul className="flex flex-col items-center gap-6 text-lg font-medium">
            <li>
              <button
                onClick={() =>
                  window.open("https://void1234-wildlife.hf.space", "_blank")
                }
                className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              >
                Chatbot
              </button>
            </li>
            <li>
              <a href="#">Wildlife Alerts</a>
            </li>
            <li>
              <a href="#">Traffic Alerts</a>
            </li>
            <li>
              <a href="#">Construction Alerts</a>
            </li>
            <li>
              <a href="#">Report Incident</a>
            </li>
            <li>
              <button
                onClick={handleSignUp}
                className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </li>
          </ul>
          <button
            onClick={toggleMobileMenu}
            className="text-white absolute top-5 right-5 text-3xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
