import DownloadIcon from "../assets/icons/DownloadIcon";
import SortIcon from "../assets/icons/SortIcon";
import Checkbox from "./Checkbox";
import users from "../assets/images/users.svg";
import Image from "next/image";
import CheckIcon from "../assets/icons/CheckIcon";
import { roleTypes } from "../utilities/types";
import { Dispatch, SetStateAction } from "react";
import {
  activeToggler,
  activeTogglerRestAll,
} from "../helperFunctions/activeToggler";

type TableTypes = {
  data: roleTypes[];
  setData: Dispatch<SetStateAction<roleTypes[]>>;
  tableHeaders: string[];
};

const activeDiv = (
  <div className="inline-flex gap-1 items-center bg-green-100 px-2 py-1 font-body rounded-2xl">
    <CheckIcon />
    <span className="font-medium text-xs text-green-200 ">Active</span>
  </div>
);

const inActiveDiv = (
  <div className="inline-flex bg-orange-100 px-2 py-1 font-body rounded-2xl">
    <span className="font-medium text-xs text-white ">In active</span>
  </div>
);

const Table = ({ data, tableHeaders, setData }: TableTypes) => {
  // Utils
  const allIsChecked = data?.every((data) => data?.isActive);

  return (
    <div className="border-2 border-grey-400 mt-5 rounded-t-lg ">
      <div className="flex items-center bg-grey-300 lg:px-6 px-3  text-xs font-medium text-blue-300 rounded-t-lg gap-2  border-b-2 border-grey-400">
        {tableHeaders?.map((headers, i) => {
          if (i === 0) {
            return (
              <div
                key={headers}
                className={`flex items-center gap-3 basis-2/4 py-3 lg:px-6 px-0`}
              >
                <Checkbox
                  isActive={allIsChecked}
                  onChange={() => {
                    setData((prevState) => {
                      if (!allIsChecked) {
                        return prevState.map((tableData) => {
                          return { ...tableData, isActive: true };
                        });
                      } else {
                        return prevState.map((tableData) => {
                          return { ...tableData, isActive: false };
                        });
                      }
                    });
                  }}
                />
                <span>{headers}</span>
                <SortIcon />
              </div>
            );
          }
          return (
            <div
              className={`flex-1 py-3 lg:block ${i !== 2 && "hidden"}`}
              key={headers}
            >
              {headers}
            </div>
          );
        })}
      </div>

      <div>
        {data?.map((tableBody, i) => {
          return (
            <div
              key={tableBody?.title}
              className="flex items-center lg:px-6 px-3 text-xs font-body gap-2 border-b-2 border-grey-400 last:border-b-0"
            >
              <div className="flex items-center gap-3 basis-2/4 py-3 lg:px-6  text-blue-100 font-medium ">
                <Checkbox
                  isActive={tableBody?.isActive as boolean}
                  onChange={() => activeTogglerRestAll(i, data, setData)}
                />
                <span>{tableBody?.title}</span>
              </div>
              <div className="flex-1 py-3  text-blue-300 font-normal lg:block hidden ">
                {tableBody?.type?.toUpperCase()}
              </div>
              <div className="flex-1 py-3   text-blue-300 font-normal ">
                {tableBody?.date}
              </div>
              <div className="flex-1  py-3  lg:block hidden ">
                {tableBody?.status !== "active" ? inActiveDiv : activeDiv}
              </div>
              <div className="flex-1 py-3  lg:block hidden ">
                <Image src={users} alt="Users" />
              </div>
              <div className="flex-1 lg:block hidden ">
                <DownloadIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
