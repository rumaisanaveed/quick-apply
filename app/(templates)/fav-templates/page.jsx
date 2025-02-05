import Template from "@/components/templates/Template";
import SidebarLayout from "@/layouts/SidebarLayout";

export default function FavoriteTemplates() {
  return (
    <SidebarLayout>
      <div className="grid grid-cols-3 p-8 gap-8 h-screen">
        {Array.from({ length: 9 }).map((_, index) => (
          <Template key={index} />
        ))}
      </div>
    </SidebarLayout>
  );
}
