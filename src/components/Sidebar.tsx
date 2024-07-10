// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const subreddits = ['reactjs', 'javascript', 'webdev', 'frontend', 'backend'];

  return (
    <div className="bg-gray-800 p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4 text-white">Subreddits</h2>
      <ul>
        <li className="mb-4">
          <Link
            to="/"
            className="block text-lg text-gray-300 p-2 rounded-md hover:bg-gray-700 hover:text-white transition duration-300"
          >
            Home
          </Link>
        </li>
        {subreddits.map((subreddit) => (
          <li key={subreddit} className="mb-4">
            <Link
              to={`/r/${subreddit}`}
              className="block text-lg text-gray-300 p-2 rounded-md hover:bg-gray-700 hover:text-white transition duration-300"
            >
              {`r/${subreddit}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
