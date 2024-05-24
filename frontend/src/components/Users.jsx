import React from "react";
import Button from "./Button";

function Users() {
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Loading.."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div></div>
      <User />
    </>
  );
}

function User() {
  const user = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Piter",
      lastName: "Doe",
    },
    {
      firstName: "Eleven",
      lastName: "Guetsberg",
    },
    {
      firstName: "Niobie",
      lastName: "Doe",
    },
  ];
  return (
    <>
      {user.map((user) => {
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
              <Button label={"Send Money"} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Users;
