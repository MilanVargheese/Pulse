// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HelloPage from "./HelloPage";
import DashBoard from "./DashBoard";
import ProfilePage from "./ProfilePage";
import SignUp from "./SignUp";
import TrafficUpdate from "./TrafficUpdate";
import AnimalCaseReported from "./AnimalCaseReported";
import OfficerDashboard from "./OfficerDashboard";
import OfficerLogin from "./OfficerLogin";
import SocialPage from "./SocialPage";
import AlertGraphPage from "./AlertGraphPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/officer-login" element={<OfficerLogin />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="//officer-dashboard" element={<OfficerDashboard />} />
        <Route path="/social-page" element={<SocialPage />} />
        <Route path="/traffic-update" element={<TrafficUpdate />} />
        <Route path="/alert-graph" element={<AlertGraphPage />} />
        <Route path="/animal-case-reported" element={<AnimalCaseReported />} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
  );
}

export default App;
