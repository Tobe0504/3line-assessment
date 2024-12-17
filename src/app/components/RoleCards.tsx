import React from "react";
import UsersIcon from "../assets/icons/UsersIcon";
import Checkbox from "./Checkbox";

type RoleCardsType = {
  title: string;
  lastActive: string;
  isActive: boolean;
  onClick: () => void;
};

const RoleCards = ({ title, lastActive, isActive, onClick }: RoleCardsType) => {
  return (
    <div
      className={`p-4 flex items-start gap-3 border-2 flex-1 rounded-lg mb-3 ${
        isActive ? "border-purple-100 bg-purple-400" : "border-grey-400 bg-none"
      } `}
      onClick={onClick}
    >
      <div className="py-2 px-3 border-2 border-grey-200 rounded-md bg-white">
        <UsersIcon />
      </div>
      <div className="flex-1">
        <p
          className={`font-body text-sm font-medium ${
            isActive ? "text-purple-500" : "text-blue-200"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-body text-sm font-normal
        ${isActive ? "text-purple-300" : "text-grey-500"}
        `}
        >
          {lastActive}
        </p>

        <div className="mt-2 flex gap-3 font-body text-sm font-medium">
          <button
            className={`${isActive ? "text-purple-600" : "text-blue-300"}`}
          >
            Set as default
          </button>
          <button className="text-purple-200">Edit</button>
        </div>
      </div>

      <Checkbox isActive={isActive} readOnly />
    </div>
  );
};

export default RoleCards;
