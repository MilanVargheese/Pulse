import React, { useState, useEffect } from "react";

function SocialPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const data = [
        {
          id: 1,
          user: "John Doe",
          content: "Saw a stray dog near the park.",
          time: "2 hours ago",
        },
        {
          id: 2,
          user: "Jane Smith",
          content: "Traffic jam due to an accident on 5th Avenue.",
          time: "3 hours ago",
        },
        {
          id: 3,
          user: "Bob Johnson",
          content: "Broken street light at Main St.",
          time: "5 hours ago",
        },
      ];
      setReports(data);
    };

    fetchReports();
  }, []);

  return (
    <div className="flex font-poppins items-center justify-center h-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 p-4">
      <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-800 rounded-xl shadow-2xl shadow-purple-800 p-8 w-full max-w-screen-lg">
        <header className="border-b-4 border-blue-800 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-white">Community Reports</h1>
        </header>

        <section className="space-y-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 rounded-xl p-6 shadow-lg text-white"
            >
              <h2 className="text-2xl font-bold">{report.user}</h2>
              <p className="mt-2">{report.content}</p>
              <p className="mt-4 text-gray-400 text-sm">{report.time}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default SocialPage;
