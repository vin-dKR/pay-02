import React, { useState, useEffect } from "react";
import Button from "./Button";
import {useNavigate } from "react-router-dom";
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(" ");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users/bulk?filter" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Loading.."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between content-center">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-center h-full">
        <Button
        onClick={(e) => {
          navigate('/send?id' + user._id + "&username" + user.username)
        }} 
        label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
