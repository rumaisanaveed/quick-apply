import ProtectServerComponents from "@/components/protect-routes/ProtectServerComponents";
import SidebarLayout from "@/layouts/SidebarLayout";

export const metadata = {
  title: "Quick Apply - Dashboard",
  description:
    "Manage your templates, and streamline your job search process with the Quick Apply Dashboard.",
};

export default function Dashboard() {
  return (
    <ProtectServerComponents>
      {/* TODO : style the dashboard */}
      <SidebarLayout>
        <h1>Dashboard Page</h1>
      </SidebarLayout>
    </ProtectServerComponents>
  );
}
