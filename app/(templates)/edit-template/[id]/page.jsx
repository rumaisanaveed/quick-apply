import TemplateForm from "@/components/templates/TemplateForm";
import SidebarLayout from "@/layouts/SidebarLayout";

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
