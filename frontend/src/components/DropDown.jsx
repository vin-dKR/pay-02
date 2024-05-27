import React from "react";
import "./DropDown.css";
import { useNavigate } from 'react-router-dom'

function DropDown() {

    const navigate = useNavigate()
  return (
    <div className="flex flex-col dropProfile">
      <ul className="flex flex-col gap-1">
        <li>Profile</li>
        <li
          onClick={() => {
            localStorage.removeItem("token");
            navigate('/signin')
          }}
          className="cursor-pointer"
        >
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
