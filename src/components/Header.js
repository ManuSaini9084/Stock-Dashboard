import React from 'react';
import '../vip.jpeg';

const Header = ({ userName, date }) => {
  return (
    <header className="p-4 bg-gray-800 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl">Hello, {userName}</h1>
        <img src='vip.jpeg' alt="VIP" className="w-10 h-10 rounded-full" />
      </div>
      <span>{date}</span>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Search</a></li>
          <li><a href="#" className="text-white">Profile</a></li>
        </ul>
      </nav>
    </header> 
  );
};

export default Header;
