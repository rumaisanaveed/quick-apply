import TemplateForm from "@/components/templates/TemplateForm";
import SidebarLayout from "@/layouts/SidebarLayout";

export const metadata = {
  title: "Quick Apply - Edit Template",
  description:
    "Modify and refine your job application templates with Quick Apply's Edit Template page, ensuring a perfect application every time.",
};

export default function EditTemplate() {
  // the data from the api to pre fill the form
  return (
    <SidebarLayout>
      <TemplateForm
        formHeading="Edit Template"
        dialogTitle="Edit Template"
        templateData={{}}
      />
    </SidebarLayout>
  );
}
