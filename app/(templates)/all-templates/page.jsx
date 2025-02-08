import SidebarLayout from "@/layouts/SidebarLayout";
import ShowTemplates from "@/components/templates/ShowTemplates";

export const metadata = {
  title: "Quick Apply - All Templates",
  description:
    "Browse, manage, and customize your job application templates efficiently with Quick Apply's All Templates page.",
};

export default function AllTemplates() {
  return (
    <SidebarLayout>
      <ShowTemplates pageHeading="All Templates" data={{}} />
    </SidebarLayout>
  );
}
