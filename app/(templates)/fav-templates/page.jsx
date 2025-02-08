import ShowTemplates from "@/components/templates/ShowTemplates";
import SidebarLayout from "@/layouts/SidebarLayout";

export default function FavoriteTemplates() {
  return (
    <SidebarLayout>
      <ShowTemplates
        pageHeading="Favorite Templates"
        showButton={false}
        data={[]}
      />
    </SidebarLayout>
  );
}
