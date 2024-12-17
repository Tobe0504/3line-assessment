import React, { useState } from "react";
import DownloadIcon from "../assets/icons/DownloadIcon";
import Button from "../components/Button";
import Table from "../components/Table";
import { roleData } from "../utilities/dummyData";
import { roleTypes } from "../utilities/types";

const tableHeaders = [
  "Name",
  "Type",
  "Date created",
  "Status",
  "Role users ",
  "",
];

const SettingsRolesUserRoles = () => {
  // States
  const [tableData, setTableData] = useState<roleTypes[]>(roleData);

  return (
    <section className="py-5 ">
      <div className="flex lg:flex-row flex-col gap-4 lg:items-center justify-between ">
        <h6 className="font-medium text-blue-100 font-body text-lg">
          User Roles
        </h6>
        <Button type="primary" classNames="max-w-[146px]">
          <DownloadIcon />
          <span>Download all</span>
        </Button>
      </div>

      <Table
        tableHeaders={tableHeaders}
        data={tableData}
        setData={setTableData}
      />
    </section>
  );
};

export default SettingsRolesUserRoles;
