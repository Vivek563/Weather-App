import React from "react";
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Input() {
  return (
  <div className="flex flex-row justify-center my-6">

    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
            type="text"
            placeholder="search..."
        className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
        <UilSearch  size={25} className="text-white crusor-pointer transition ease-out hover:scale-125"/>
        <UilLocationPoint  size={25} className="text-white crusor-pointer transition ease-out hover:scale-125"/>
    </div>  

  </div>
  );
}

export default Input;
