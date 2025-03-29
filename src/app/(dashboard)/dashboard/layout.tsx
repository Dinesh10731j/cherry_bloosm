import Sidebar from "@/components/sidebar";
import { LayoutProps } from "@/lib/utils";

const DashBoardLayout: React.FC<LayoutProps> = ({ children, role }) => {
  console.log("The role is ",role)
  return (
    <div className="flex gap-2.5">
      <Sidebar role={role} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
