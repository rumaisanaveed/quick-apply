import ProtectServerComponents from "@/components/protect-routes/ProtectServerComponents";
import SidebarLayout from "@/layouts/SidebarLayout";

export default function Dashboard() {
  return (
    <ProtectServerComponents>
      <SidebarLayout>
        <h1>Dashboard Page</h1>
      </SidebarLayout>
    </ProtectServerComponents>
  );
}
