import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      const { token } = response.data;

      localStorage.setItem("authToken", token);
      navigate("/DashBoard");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid email or password. Please try again.");
        } else if (err.response.status === 500) {
          setError("Internal server error. Please try again later.");
        } else {
          setError(
            `Error: ${err.response.status}. ${
              err.response.data.message || "Unexpected error occurred."
            }`
          );
        }
        console.error("Error Response Data:", err.response.data);
      } else if (err.request) {
        setError("No response from the server. Please check your connection.");
        console.error("Error Request:", err.request);
      } else {
        setError("Error: " + err.message);
        console.error("Error Message:", err.message);
      }
    }
  };

  return (
    <div className="flex font-poppins items-center justify-center h-screen dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
        <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold dark:text-white text-5xl text-center cursor-default">
            Log in
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
            <button className="group text-blue-400 transition-all duration-100 ease-in-out">
              <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Forget your password?
              </span>
            </button>
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Don't have an account?
              <button
                onClick={() => navigate("/SignUp")}
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="ml-1 bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign Up
                </span>
              </button>
            </h3>
          </div>

          {/* Officer Login Section */}
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Are you an Officer?
              <button
                onClick={() => navigate("/officer-login")}
                className="ml-1 group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Log in here
                </span>
              </button>
            </h3>
          </div>

          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-5 flex-wrap"
          >
            {[
              "Google",
              "Linkedin",
              "Github",
              "Facebook",
              "Twitter",
              "Apple",
            ].map((provider, idx) => (
              <button
                key={idx}
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px] dark:invert"
                  src={`https://ucarecdn.com/${
                    provider === "Google"
                      ? "8f25a2ba-bdcf-4ff1-b596-088f330416ef"
                      : provider === "Linkedin"
                      ? "95eebb9c-85cf-4d12-942f-3c40d7044dc6"
                      : provider === "Github"
                      ? "be5b0ffd-85e8-4639-83a6-5162dfa15a16"
                      : provider === "Facebook"
                      ? "6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9"
                      : provider === "Twitter"
                      ? "82d7ca0a-c380-44c4-ba24-658723e2ab07"
                      : "3277d952-8e21-4aad-a2b7-d484dad531fb"
                  }/`}
                  alt={provider}
                />
              </button>
            ))}
          </div>
          <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
            <p className="cursor-default">
              By signing in, you agree to our
              <button className="group text-blue-400 transition-all duration-100 ease-in-out">
                <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Terms
                </span>
              </button>
              and
              <button className="group text-blue-400 transition-all duration-100 ease-in-out">
                <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Privacy Policy
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
