"use client";

import React from "react";
import {
  Menu,
  MenuItem,
  Sidebar as ReactProSidebar,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { LayoutDashboard, ShoppingBasket } from "lucide-react";
import Icons from "../icons";
import Link from "next/link";

export default function Sidebar() {
  const routes = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      childNavs: [],
    },
    {
      name: "Catalogue",
      icon: LayoutDashboard,
      childNavs: [
        {
          name: "Products",
          icon: ShoppingBasket,
        },
      ],
    },
  ];

  return (
    <div className="h-screen">
      <ReactProSidebar
        width="240px"
        className="h-full"
        backgroundColor="#2d3436"
        style={{
          borderWidth: "0px",
          color: "white",
        }}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2 py-4 px-7 cursor-pointer"
        >
          <Icons.logo className="size-7" />
          <p className="text-base font-bold">Limi Ecommerce</p>
        </Link>
        <Menu
          className="mt-4"
          menuItemStyles={{
            button: () => {
              return {
                height: "40px",
                fontSize: "14px",
                ":hover": {
                  backgroundColor: "#42484a",
                },
              };
            },
            icon: () => {
              return {
                marginRight: "2px",
              };
            },
          }}
        >
          {routes.map((route, index) => (
            <React.Fragment key={index}>
              {route.childNavs.length > 0 ? (
                <SubMenu
                  label={route.name}
                  icon={<route.icon className="w-4 h-4" />}
                  rootStyles={{
                    ["& > ." + menuClasses.button]: {
                      "&:hover": {
                        backgroundColor: "#42484a",
                      },
                    },
                    ["." + menuClasses.subMenuContent]: {
                      backgroundColor: "#2d3436",
                    },
                  }}
                >
                  {route.childNavs.map((child, childIndex) => (
                    <MenuItem
                      key={childIndex}
                      icon={<child.icon className="w-4 h-4" />}
                    >
                      {child.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem icon={<route.icon className="w-4 h-4" />}>
                  {route.name}
                </MenuItem>
              )}
            </React.Fragment>
          ))}
        </Menu>
      </ReactProSidebar>
    </div>
  );
}
