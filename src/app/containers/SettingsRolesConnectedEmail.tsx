import React, { useState } from "react";
import InboxIcon from "../assets/icons/InboxIcon";
import Input from "../components/Input";
import { activeToggler } from "../helperFunctions/activeToggler";

const SettingsRolesConnectedEmail = () => {
  // States
  const [connectedEmails, setConnectedEmails] = useState([
    {
      title: "My account email",
      info: "olivia@untitledui.com",
      isActive: true,
    },

    {
      title: "An alternative email",
      info: null,
      isActive: false,
    },
  ]);

  //   Utils
  const primaryTextStyles = "font-medium font-body text-sm text-blue-200";
  const secondaryTextStyles =
    "font-normal font-body text-sm text-blue-300 block";

  return (
    <div className="flex lg:flex-row flex-col items-start lg:gap-8 gap-5 py-5 border-b-2 border-grey-400">
      <div>
        <h6 className={primaryTextStyles}>Connected email</h6>
        <p className={secondaryTextStyles}>Select role account</p>
      </div>

      <div className="min-w-[488px]">
        {connectedEmails.map((data, i) => {
          return (
            <div key={data?.title} className="flex gap-2 items-start mb-4">
              <input
                type="radio"
                className={`w-5 h-5 border-2  border-gray-300 rounded-full text-purple-300  focus:ring-purple-300 checked:bg-purple-300 checked:border-transparent`}
                id={data?.title}
                onChange={() =>
                  activeToggler(i, connectedEmails, setConnectedEmails)
                }
                checked={data?.isActive}
              />
              <label htmlFor={data?.title} className=" block m-0 p-0">
                <span className={primaryTextStyles}>{data?.title}</span>
                <span className={secondaryTextStyles}>{data?.info}</span>
              </label>
            </div>
          );
        })}

        {connectedEmails[1].isActive && (
          <Input placeholder="billing@untitledui.com" icon={<InboxIcon />} />
        )}
      </div>
    </div>
  );
};

export default SettingsRolesConnectedEmail;
