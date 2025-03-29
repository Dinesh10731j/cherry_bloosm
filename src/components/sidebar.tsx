"use client";
import Link from "next/link";
import { menus } from "@/lib/utils";
import { SidebarProps } from "@/lib/utils";
import { useState } from "react";
import { MenuSquareIcon } from "lucide-react";

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!menus[role]) {
    return <div className="text-blue-200 p-4">No menu available</div>;
  }

  return (
    <aside className={`bg-gray-800 h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-16"} flex flex-col`}>
      <button className="p-4 text-white" onClick={() => setIsOpen(!isOpen)}>
        <MenuSquareIcon size={24} />
      </button>
      <ul className="flex flex-col gap-2 p-2">
        {menus[role]?.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="block px-4 py-2 rounded-lg text-blue-200 bg-gray-700 hover:bg-gray-600 transition duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
