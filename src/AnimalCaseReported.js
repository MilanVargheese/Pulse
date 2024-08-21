import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AnimalCaseReported() {
  const [animalReports, setAnimalReports] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [animalInfo, setAnimalInfo] = useState("");
  const [size, setSize] = useState("");
  const [behavior, setBehavior] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = {
      animalType,
      location,
      description,
      size,
      behavior,
      animalInfo,
      image,
    };

    setAnimalReports([newReport]);
    setIsSubmitted(true);

    setAnimalType("");
    setLocation("");
    setDescription("");
    setSize("");
    setBehavior("");
    setAnimalInfo("");
    setImage(null);
  };

  const handleClearForm = () => {
    setAnimalType("");
    setLocation("");
    setDescription("");
    setSize("");
    setBehavior("");
    setAnimalInfo("");
    setImage(null);
    setIsSubmitted(false);
  };

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-screen-md">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
          Animal Alert
        </h1>
        {isSubmitted ? (
          <div className="text-lg text-gray-600 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-center mb-4">
              Reports Submitted
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4">
              {/^snake$/i.test(animalReports[0].animalType) ? (
                <p className="text-red-500 font-bold text-center">
                  Contact info: Animal Control
                </p>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Report submitted successfully.
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleGoToDashboard}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
              >
                Go to Dashboard
              </button>
              <button
                onClick={handleClearForm}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
              >
                Submit Another Report
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Animal Name
              </label>
              <input
                type="text"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter the name of animal"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Enter the location of the sighting"
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
                placeholder="Enter a brief description of the animal"
                rows="4"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Upload Image
              </label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="mt-1 block w-full text-gray-700 dark:text-gray-300"
                accept="image/*"
              />
              {image && (
                <img
                  src={image}
                  alt="Animal"
                  className="mt-4 max-w-full h-auto rounded-md shadow-lg"
                />
              )}
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
                onClick={handleClearForm}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
              >
                Clear Form
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AnimalCaseReported;
