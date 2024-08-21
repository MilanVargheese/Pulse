import React from "react";

function SettingsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-xl font-bold hover:text-gray-900 dark:hover:text-gray-100"
        >
          &times;
        </button>

        <h2 className="text-lg md:text-xl font-bold mb-4 text-blue-500">
          User Settings
        </h2>

        <div className="space-y-4">
          {/* Profile Settings */}
          <div>
            <h3 className="text-md font-semibold text-white">
              Profile Settings
            </h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="/profile" className="text-blue-500 hover:underline">
                  View Profile
                </a>
              </li>
              <li>
                <a
                  href="/change-password"
                  className="text-blue-500 hover:underline"
                >
                  Change Password
                </a>
              </li>
              <li>
                <a
                  href="/account-settings"
                  className="text-blue-500 hover:underline"
                >
                  Account Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Notification Settings */}
          <div>
            <h3 className="text-md font-semibold  text-white">
              Notification Settings
            </h3>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href="/email-notifications"
                  className="text-blue-500 hover:underline"
                >
                  Email Notifications
                </a>
              </li>
              <li>
                <a
                  href="/push-notifications"
                  className="text-blue-500 hover:underline"
                >
                  Push Notifications
                </a>
              </li>
            </ul>
          </div>

          {/* App Preferences */}
          <div>
            <h3 className="text-md font-semibold  text-white">
              App Preferences
            </h3>
            <ul className="list-disc pl-5">
              <li>
                <a href="/theme" className="text-blue-500 hover:underline">
                  Theme
                </a>
              </li>
              <li>
                <a href="/language" className="text-blue-500 hover:underline">
                  Language
                </a>
              </li>
            </ul>
          </div>

          {/* Subscription and Billing */}
          <div>
            <h3 className="text-md font-semibold  text-white">
              Subscription and Billing
            </h3>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href="/subscription-details"
                  className="text-blue-500 hover:underline"
                >
                  Subscription Details
                </a>
              </li>
              <li>
                <a
                  href="/billing-info"
                  className="text-blue-500 hover:underline"
                >
                  Billing Information
                </a>
              </li>
            </ul>
          </div>

          {/* Help and Support */}
          <div>
            <h3 className="text-md font-semibold  text-white">
              Help and Support
            </h3>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href="/help-center"
                  className="text-blue-500 hover:underline"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/contact-support"
                  className="text-blue-500 hover:underline"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Log Out */}
          <div>
            <a href="/logout" className="text-red-500 hover:underline">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
