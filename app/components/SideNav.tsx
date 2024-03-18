"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navList = [
  {
    title: "Dashboard",
    pathname: "/dashboard",
  },
  {
    title: "Patients",
    pathname: "/patients",
  },
  {
    title: "Billing",
    pathname: "/billing",
  },
  {
    title: "Settings",
    pathname: "/settings",
  },
];

const SideNav = () => {
  const pathaname = usePathname();
  console.log(pathaname);
  return (
    <div className="bg-gray-800	 h-screen p-2">
      <div className="flex justify-center p-2 mb-4">
        <h2 className="font-medium text-3xl text-white">Clinic Management System</h2>
      </div>
      <ul>
        {navList.map((item) => {
          return (
            <Link
              href={item.pathname}
              className={clsx(
                "flex p-3 text-white cursor-pointer  mb-2 rounded-md",
                pathaname === item.pathname && "bg-gray-700"
              )}
            >
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
