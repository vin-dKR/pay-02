import React, { useState } from "react";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function SendMoney() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const user = searchParams.get("name");

  const [amount, setAmount] = useState();

  return (
    <div className="flex justify-center h-screen bg-gray-200">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex item-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {user[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{user}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:oacity-70"
                >
                  Amount (in Rs.)
                </label>
                <InputBox
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  placeholder={"Enter Amount"}
                  type={"number"}
                  id={"amount"}
                />
                <Button
                  onClick={() => {
                    axios.post(
                      "http://localhost:3000/api/v1/account/transfer",
                      {
                        to: id,
                        amount,
                      },
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token"),
                        },
                      }
                    );
                  }}
                  label={"Initiate Transfer"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;