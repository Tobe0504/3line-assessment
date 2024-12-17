import React, { useEffect, useState } from "react";
import DownloadIcon from "../assets/icons/DownloadIcon";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Table from "../components/Table";
import { requestHandler } from "../helperFunctions/requestHandler";
import { roleData } from "../utilities/dummyData";
import { requestType, roleTypes } from "../utilities/types";

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
  const [tableData, setTableData] = useState<roleTypes[]>([]);
  const [data, setData] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  // Effects
  useEffect(() => {
    requestHandler({
      method: "GET",
      url: "/api/roles",
      state: data,
      setState: setData,
    });
  }, []);

  useEffect(() => {
    if (data?.data) {
      setTableData(data?.data);
    }
  }, [data?.data]);

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

      {data?.isLoading ? (
        <Loader />
      ) : (
        <Table
          tableHeaders={tableHeaders}
          data={tableData}
          setData={setTableData}
        />
      )}
    </section>
  );
};

export default SettingsRolesUserRoles;
