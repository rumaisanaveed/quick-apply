import Template from "@/components/templates/Template";
import SidebarLayout from "@/layouts/SidebarLayout";

export default function AllTemplates() {
  return (
    <SidebarLayout>
      <div className="grid md:items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-4 md:p-8 md:gap-8 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <Template key={index} />
        ))}
      </div>
    </SidebarLayout>
  );
}
