import React from "react";
import SearchIcon from "../assets/icons/SearchIcon";

type InputTypes = {
  placeholder: string;
  icon: React.ReactNode;
  className?: string;
};

const Input = ({ placeholder, icon, className }: InputTypes) => {
  return (
    <div className="w-full h-[44px] relative border-200 border-red-500">
      <input
        className={`w-full h-full rounded-lg indent-10 border-2 border-grey-100 shadow-100 outline-purple-100 ${className}`}
        style={{ border: "2px solid #D0D5DD" }}
        placeholder={placeholder}
      />
      <span className="absolute left-4 top-0 bottom-0 my-auto flex items-center justify-center">
        {icon || <SearchIcon />}
      </span>
    </div>
  );
};

export default Input;
