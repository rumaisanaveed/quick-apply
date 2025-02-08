import SidebarLayout from "@/layouts/SidebarLayout";
import ShowTemplates from "@/components/templates/ShowTemplates";

export default function AllTemplates() {
  return (
    <SidebarLayout>
      <ShowTemplates pageHeading="All Templates" data={{}} />
    </SidebarLayout>
  );
}
