import React, { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign UP"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
            placeholder={"Vinod"}
          />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            label={"Last Name"}
            placeholder={"KR"}
          />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setUsername(e.target.value);
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
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/users/signup",
                {
                  firstName,
                  lastName,
                  username,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign Up"}
          />
        </div>
      </div>
      <div className="mt-8"></div>
    </div>
  );
}

export default Signup;
