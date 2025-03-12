import Template from "./Template";
import CreateButton from "../ui/custom/buttons/CreateButton";

export default function ShowTemplates({
  pageHeading,
  showButton = true,
  data,
}) {
  return (
    <div className="flex flex-col gap-6 md:gap-4 p-4 md:px-8 md:pb-5">
      <div className="flex items-center justify-evenly md:px-3 sm:justify-between">
        <h1 className="text-black text-2xl font-semibold">{pageHeading}</h1>
        {showButton && <CreateButton />}
      </div>
      {/* data will be coming from here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <Template key={index} />
        ))}
      </div>
    </div>
  );
}
