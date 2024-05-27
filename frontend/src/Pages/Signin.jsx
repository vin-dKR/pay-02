import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

function Signin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign IN"} />
          <SubHeading label={"Enter your credential to Sign In"} />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            label={"Email"}
            placeholder={"vinodkr@gmail.com"}
          />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label={"Password"}
            placeholder={"Password"}
          />
          <div className="mt-8"></div>
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/users/signin",
                {
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign In"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
