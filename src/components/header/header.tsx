import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="h-12 text-black flex items-center">
      <div className="w-full h-full flex items-center justify-between p-8">
        <button className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
          <Link href="/">&lt;niel/&gt;</Link>
        </button>
      </div>
    </header>
  );
}
