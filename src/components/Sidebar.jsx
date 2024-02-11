import React from 'react';


const Sidebar = ({ players, onPlayerClick }) => {
  return (
    <div className="sidebar sidebar-background text-white p-4 flex flex-col justify-start ">
      <a href="http://127.0.0.1:8000/players/rating-history-csv" download className="gradient-background font-montserrat text-center text-black px-4 py-2 rounded-md mt-4 mx-4 mb-4 text-xs font-semibold">Download top 50 player rating history</a>
      <h2 className="text-2xl font-extrabold mb-4 mx-4 font-montserrat ">Top <span className='sidebar-heading'>50</span> Chess Players </h2>
      <ul className="w-full">
        {players.map((player, index) => (
          <li key={index} onClick={() => onPlayerClick(player)} className="cursor-pointer font-roboto hover:bg-gray-700 py-2 px-4 rounded-lg mb-1 w-full text-left">
            {player.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
