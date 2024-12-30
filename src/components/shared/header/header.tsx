"use client";

import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";
import { LuMenu } from "react-icons/lu";
import { CiHome } from "react-icons/ci";
import { MdOutlineMailOutline, MdOutlineNewReleases } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoArrowRedoOutline } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const isPortuguese = pathname === "/pt";

  const handleToggle = () => {
    router.push(isPortuguese ? "/" : "/pt");
  };

  return (
    <header className="h-12 bg-white text-black flex items-center justify-between p-8 shadow">
      <div className="flex items-center">
        <button className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          <Link href="/">&lt;nielassis/&gt;</Link>
        </button>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <button
            onClick={handleToggle}
            className="transition-transform relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100"
          >
            <div className="relative w-8 h-8 rounded-full">
              {isPortuguese ? (
                <>
                  <Image
                    src="/EnglandIconBW.png"
                    alt="Switch to English"
                    height={32}
                    width={32}
                    className="block rounded-full"
                  />

                  <Image
                    src="/EnglandIcon.png"
                    alt="Switch to English"
                    height={32}
                    width={32}
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity rounded-full"
                  />
                </>
              ) : (
                <>
                  <Image
                    src="/BrazilIconBW.svg"
                    alt="Switch to Portuguese"
                    height={32}
                    width={32}
                    className="block rounded-full"
                  />

                  <Image
                    src="/BrazilIcon.svg"
                    alt="Switch to Portuguese"
                    height={32}
                    width={32}
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity rounded-full"
                  />
                </>
              )}
            </div>
          </button>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-300"
              >
                Menu
                <LuMenu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-2">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator className="border-t-2 border-gray-200 my-2" />
              <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200">
                <CiHome className="text-xl" />
                Home
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200">
                <MdOutlineNewReleases className="text-xl" />
                Blog
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200">
                <GrProjects className="text-xl" />
                Projects
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200">
                <IoArrowRedoOutline className="text-xl" />
                About
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition duration-200">
                <MdOutlineMailOutline className="text-xl" />
                Get in touch
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
