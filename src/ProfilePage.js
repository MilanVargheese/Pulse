import React from "react";

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h1 className="text-3xl font-bold text-blue-500 mt-4">John Doe</h1>
        </div>
        <div className="text-lg text-gray-600 dark:text-gray-300 mt-6">
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Address:</strong> 1234 Elm Street, Some City, Some Country
          </p>
          {/* Add more profile details as needed */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
