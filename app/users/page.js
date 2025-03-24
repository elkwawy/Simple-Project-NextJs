"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (err) {
      setError("Failed to fetch users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <p className="text-red-500 text-center mt-8">{error}</p>;
  if (users.length === 0) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Users List
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] p-6"
          >
            {/* صورة المستخدم */}
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />

            {/* بيانات المستخدم */}
            <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {user.email}
            </p>

            <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Birth Date:</strong> {user.birthDate}
              </p>
              <p>
                <strong>Eye Color:</strong> {user.eyeColor}
              </p>
              <p>
                <strong>Hair:</strong> {user.hair.color} ({user.hair.type})
              </p>
            </div>

            {/* العنوان */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Address:</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}, {user.address.country}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Postal Code:</strong> {user.address.postalCode}
              </p>
            </div>

            {/* بيانات العمل */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Company:</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Department:</strong> {user.company.department}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Title:</strong> {user.company.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Company Name:</strong> {user.company.name}
              </p>
            </div>

   

            {/* بيانات أخرى */}
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                <strong>Role:</strong> {user.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <strong>University:</strong> {user.university}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
