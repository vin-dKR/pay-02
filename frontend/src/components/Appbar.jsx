import React, { useState } from "react";
import DropDown from "./DropDown";

function Appbar() {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-5">
        PAytmmmmmmm
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-5">
          <div onClick={(e) => {
            setShowDrop((prev) => (!prev))
          }} className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
        {showDrop && <DropDown />}
        
      </div>
    </div>
  );
}

export default Appbar;
