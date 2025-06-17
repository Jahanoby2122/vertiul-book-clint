import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://vertiul-books.vercel.app/books/')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  if (!user) return <p>Loading user...</p>;
  if (!books.length) return <p>Loading books...</p>;

  const userBooks = books.filter(book => book.user_email === user.email);

  const getCategoryCount = (category) =>
    userBooks.filter(book => book.book_category?.toLowerCase() === category.toLowerCase()).length;

  const fictionCount = getCategoryCount('Fiction');
  const nonFictionCount = getCategoryCount('Non Fiction');
  const fantasyCount = getCategoryCount('Fantasy');

  const chartData = [
    { name: 'Fiction', value: fictionCount },
    { name: 'Non Fiction', value: nonFictionCount },
    { name: 'Fantasy', value: fantasyCount }
  ];

  return (
    <div className="max-w-5xl mx-auto py-52 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow">
      
      {/* Left: Profile Section */}
      <div className="flex flex-col items-center text-center border-r md:border-r-gray-200  pr-4">
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Edit Profile
        </button>

        <div className="mt-6 text-left w-full px-6">
          <h3 className="text-lg font-bold mb-2">📚 Book Summary</h3>
          <p>📘 Fiction: {fictionCount}</p>
          <p>📗 Non-Fiction: {nonFictionCount}</p>
          <p>🧙‍♂️ Fantasy: {fantasyCount}</p>
        </div>
      </div>

      {/* Right: Chart and Total */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold">Book Overview</h3>
          <p className="text-4xl font-extrabold text-blue-700 mt-2">
            {userBooks.length}
          </p>
          <p className="text-gray-600">Total Books</p>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Profile;
