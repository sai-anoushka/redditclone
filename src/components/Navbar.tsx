import React from 'react';
import { FaRedditAlien } from 'react-icons/fa'; // Using react-icons for the Reddit logo

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <FaRedditAlien className="text-white text-3xl mr-2" />
          <span className="text-white text-2xl font-bold">Reddit Clone</span>
        </div>
        <div>
          <a href="#" className="text-white mr-4">Home</a>
          <a href="#" className="text-white mr-4">Popular</a>
          <a href="#" className="text-white mr-4">All</a>
          <a href="#" className="text-white">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
