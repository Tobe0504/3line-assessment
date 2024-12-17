import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { navItemsType } from "../utilities/types";
import classes from "./SectionsNav.module.css";

type SectionsNavTypes = {
  navItems: navItemsType[];
  setNavItems: Dispatch<SetStateAction<navItemsType[]>>;
};

const SectionsNav = ({ navItems, setNavItems }: SectionsNavTypes) => {
  // Router
  const pathname = usePathname();

  return (
    <div className=" mt-5 border-2 border-grey-100 inline-flex rounded-lg overflow-x-auto w-full lg:w-auto no-scrollbar">
      {navItems.map((data, i) => {
        return (
          <Link
            key={i}
            href={`/settings${data?.route}`}
            className={`py-2.5 px-4  border-r-2 last:border-r-0 border-grey-100 font-body font-medium text-sm text-blue-200 shrink-0 grow-0${
              pathname.includes(data.route as string)
                ? `bg-grey-300`
                : undefined
            }`}
          >
            <span>{data.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SectionsNav;
