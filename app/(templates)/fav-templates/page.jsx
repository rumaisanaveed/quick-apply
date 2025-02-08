import ShowTemplates from "@/components/templates/ShowTemplates";
import SidebarLayout from "@/layouts/SidebarLayout";

export const metadata = {
  title: "Quick Apply - Favorite Templates",
  description:
    "Access and manage your favorite job application templates in one place with Quick Apply's Favorite Templates page.",
};

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
