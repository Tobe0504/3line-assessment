import React from "react";

type HamburgerIconTypes = { onClick: () => void };

const HamburgerIcon = ({ onClick }: HamburgerIconTypes) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect y="0.5" width="40" height="40" rx="8" fill="white" />
      <path
        d="M11 20.5H25M11 14.5H29M11 26.5H29"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
