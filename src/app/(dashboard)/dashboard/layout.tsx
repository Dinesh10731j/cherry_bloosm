import Sidebar from "@/components/sidebar";
interface LayoutProps {
  children: React.ReactNode;
  role: "admin" | "staff" | "customer";
}

const DashBoardLayout: React.FC<LayoutProps> = ({ children, role }) => {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
