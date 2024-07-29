import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function home() {
  const [roomID, setRoomID] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (roomID) {
      navigate(`/room/${roomID}`);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[400px]">
        <h1 className="text-4xl mb-4 text-white font-bold text-center">
          Hey! Welcome
        </h1>

        <input
          onChange={(e) => {
            setRoomID(e.target.value);
          }}
          value={roomID}
          type="text"
          className="border-2 w-full border-white rounded-lg mb-4 focus:none px-4 py-3 text-xl"
          placeholder="Enter Room ID"
        />

        <button
          className="bg-blue-500 w-full rounded-lg block px-5 py-3 text-xl text-white"
          onClick={handleClick}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default home;
