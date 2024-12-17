import React from "react";

type ButtonTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  classNames?: string;
  onClick?: () => void;
};

const Button = ({ children, type, classNames, onClick }: ButtonTypes) => {
  return (
    <button
      className={`flex gap-2 font-medium font-body text-sm px-4 py-3 rounded-lg text-blue-300 ${classNames} ${
        type === "primary" && "border-2 border-grey-100"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
