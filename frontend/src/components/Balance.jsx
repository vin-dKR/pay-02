import axios from "axios";
import React, { useEffect, useState } from "react";

function Balance() {
  const [balance, setBalance] = useState();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching the balance", error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your Balance</div>
      <div className="font-semibold ml-4 text-large">
        { balance }
      </div>
    </div>
  );
}

export default Balance;
