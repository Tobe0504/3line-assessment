"use client";

import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../assets/icons/SearchIcon";
import logo from "../assets/images/logo.svg";
import Input from "../components/Input";
import { sideNavRoutes } from "../utilities/routes";
import featureImage from "../assets/images/featureImage.svg";
import user from "../assets/images/user.svg";
import LogoutIcon from "../assets/icons/LogoutIcon";
import Close from "../assets/icons/CloseIcon";
import { usePathname } from "next/navigation";

type SideNavTypes = {
  onClose?: () => void;
};

const SideNav = ({ onClose }: SideNavTypes) => {
  // Router
  const pathname = usePathname();

  return (
    <nav className="lg:basis-[279px] basis-0 py-8 lg:px-6 relative overflow-y-auto no-scrollbar">
      <div className="flex items-center gap-2.5 mb-6 lg:px-0 px-4">
        <Image src={logo} alt="Logo" />
        <h1 className="font-body text-xl text-blue-100 font-medium">
          Untitled UI
        </h1>

        <Close
          height="24"
          width="24"
          className="ml-auto cursor-pointer lg:hidden"
          onClick={onClose}
        />
      </div>

      <Input placeholder="Search" icon={<SearchIcon />} />

      <div className="mt-2 py-4">
        {sideNavRoutes.map((route) => {
          return (
            <Link
              href={route.route}
              key={route.route}
              className={`flex items-center gap-3 px-3 py-2 rounded-md mb-2 text-blue-200 hover:bg-grey-300 ${
                pathname.includes(route.route) && "bg-grey-300"
              }`}
            >
              <span>{route.icon}</span>
              <span className="font-body text-base font-medium ">
                {route.title}
              </span>
              {route.notificationsCount ? (
                <span className="ml-auto px-2.5 py-1 rounded-2xl bg-grey-200">
                  {route.notificationsCount}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="py-5 px-4 bg-grey-300 rounded-lg">
        <h4 className="font-medium mb-2 font-body text-sm text-blue-100">
          New features available!
        </h4>
        <p className="font-normal mb-4 font-body text-sm text-blue-300">
          Check out the new dashboard view. Pages now load faster.{" "}
        </p>
        <Image
          src={featureImage}
          alt="Feature Image"
          className="w-full h-[136px] object-cover rounded mb-4"
        />
        <div className="flex items-center gap-3 font-medium text-sm font-body">
          <button className="text-blue-300">Dismiss</button>
          <button className="text-purple-200">What’s new?</button>
        </div>
      </div>

      <div className="flex items-start gap-3 border-t-2 border-grey-400 mt-5 mx-4 py-6 ">
        <Image src={user} alt="User" />
        <div>
          <h6 className="font-medium font-body text-sm text-blue-100">
            Olivia Rhye
          </h6>
          <p className="font-normal font-body text-sm text-blue-300">
            olivia@untitledui.com
          </p>
        </div>

        <LogoutIcon />
      </div>
    </nav>
  );
};

export default SideNav;
