"use client";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { AiOutlineStock } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomNavigator = () => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24}/>,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <AiOutlineStock size={24} />,
        label: "증권",
        isActive: pathname === "/stock",
        href: "/stock",
      },
    ];
  }, [pathname]);

  return (
      <section className="flex justify-around fixed bottom-0 left-0 w-full bg-gray-700 py-4 rounded-t-2xl"> 
          {routes.map((route) => {
              return (
                  <Link key={route.label} href={route.href}>
                    <div className="flex">
                      <div className={route.isActive ? "text-gray-50" : "text-gray-500"}>{route.icon}</div>
                      <div className={route.isActive ? "text-gray-50" : "text-gray-500"}>{route.label}</div>
                    </div>
                  </Link>
              )
          })}
      </section>
  );
};

export default BottomNavigator;
