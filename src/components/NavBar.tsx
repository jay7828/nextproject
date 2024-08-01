"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utiles";
import Link from "next/link";

function NavBar() {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div className="dark fixed top-3 w-full p-4 z-50">
      <Menu setActive={setActive}>
          <Link href='/'> <MenuItem setActive={setActive} active={active} item="Home"></MenuItem> </Link>
          <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
          </MenuItem>
          <Link href='/contact'> <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem> </Link>
      </Menu>
      </div>
    );
}

export default NavBar;
