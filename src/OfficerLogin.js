import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const OfficerLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password && verificationId) {
      navigate("/officer-dashboard");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center h-screen dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
        <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold dark:text-white text-5xl text-center cursor-default">
            Officer Login
          </h1>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 dark:text-white text-lg">
                Email
              </label>
              <input
                id="email"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 dark:text-white text-lg"
              >
                Password
              </label>
              <input
                id="password"
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="verificationId"
                className="mb-2 dark:text-white text-lg"
              >
                Verification ID
              </label>
              <input
                id="verificationId"
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="text"
                placeholder="Verification ID"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfficerLogin;
