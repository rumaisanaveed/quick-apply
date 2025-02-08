import TemplateForm from "@/components/templates/TemplateForm";
import SidebarLayout from "@/layouts/SidebarLayout";

export const metadata = {
  title: "Quick Apply - New Template",
  description:
    "Create a personalized job application template with Quick Apply's New Template page, streamlining your application process effortlessly.",
};

export default function NewTemplate() {
  return (
    <SidebarLayout>
      <TemplateForm
        formHeading="Create New Template"
        dialogTitle="Save Template"
        templateData={{}}
      />
    </SidebarLayout>
  );
}
