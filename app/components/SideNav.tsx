"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BiSolidDashboard } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { RiBillFill, RiSettings5Fill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";

const navList = [
  {
    title: "Dashboard",
    pathname: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    title: "Patients",
    pathname: "/patients",
    icon: <MdPeopleAlt />,
  },
  {
    title: "Doctors",
    pathname: "/doctors",
    icon: <FaUserDoctor />,
  },
  {
    title: "Billing",
    pathname: "/billing",
    icon: <RiBillFill />,
  },
  {
    title: "Settings",
    pathname: "/settings",
    icon: <RiSettings5Fill />,
  },
];

const SideNav = () => {
  const pathaname = usePathname();
  console.log(pathaname);
  return (
    <div className="bg-gray-800	 h-screen p-6">
      <div className="flex justify-center p-2 mb-6">
        <h2 className="font-medium text-3xl text-white">
          Clinic<span className="text-sky-400">Care</span>
        </h2>
      </div>
      <ul>
        {navList.map((item) => {
          return (
            <Link
              href={item.pathname}
              className={clsx(
                "flex p-3 text-white cursor-pointer  mb-2 rounded-md",
                pathaname === item.pathname && "bg-gray-700 text-sky-400"
              )}
            >
              <li className="flex items-center ">
                <span className="pr-2 text-xl">{item.icon}</span>{" "}
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
