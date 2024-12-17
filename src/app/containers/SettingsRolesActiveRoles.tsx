import React, { useState } from "react";
import AddIcon from "../assets/icons/AddIcon";
import Button from "../components/Button";
import RoleCards from "../components/RoleCards";
import { activeToggler } from "../helperFunctions/activeToggler";

//   Utils
const primaryTextStyles = "font-medium font-body text-sm text-blue-200";
const secondaryTextStyles = "font-normal font-body text-sm text-blue-300 block";

const SettingsRolesActiveRoles = () => {
  // States
  const [roles, setRoles] = useState([
    {
      title: "Superadmin",
      lastActive: "Last active 06/2023",
      isActive: true,
    },
    {
      title: "Developeradmin",
      lastActive: "Last active 01/2023",
      isActive: false,
    },
    {
      title: "Supportadmin",
      lastActive: "Last active 10/2022",
      isActive: false,
    },
  ]);

  return (
    <div className="flex lg:flex-row flex-col items-start gap-8 py-5 ">
      <div>
        <h6 className={primaryTextStyles}>Active Role</h6>
        <p className={secondaryTextStyles}>
          Select active role available to the user.
        </p>
      </div>

      <div className="flex-1 w-full">
        {roles.map((data, i) => {
          return (
            <RoleCards
              {...data}
              key={data?.title}
              onClick={() => activeToggler(i, roles, setRoles)}
            />
          );
        })}

        <Button classNames="mt-4">
          <AddIcon />
          <span>Add role to user</span>
        </Button>
      </div>
    </div>
  );
};

export default SettingsRolesActiveRoles;
