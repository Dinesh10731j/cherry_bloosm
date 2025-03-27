import Link from "next/link";
import { menus } from "@/lib/utils";
import { SidebarProps } from "@/lib/utils";

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  return (
 
      <aside className=" bg-gray-800 h-screen">
        {menus[role]?.map((item) => (

          <li key={item?.path}>
            <Link
              href={item.path}
              className="block px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-700 transition duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </aside>
   
  );
};

export default Sidebar;
