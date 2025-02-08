import { Heart } from "lucide-react";
import TemplateDropdownMenu from "../ui/custom/menu/TemplateMenu";

export default function Template() {
  return (
    <>
      <div className="bg-zinc-50 shadow-md rounded-md max-w-[330px] xl:max-w-[380px] mx-auto overflow-hidden">
        <div className="bg-zinc-800 flex items-center justify-between p-3 rounded-t-md">
          <h1 className="text-gray-100 text-base">Template Name</h1>
          <TemplateDropdownMenu />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <p>
            I'm applying for the position of Junior Frontend Developer. I've
            expertise in React and Next.js...
          </p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap items-center">
              {["frontend", "template", "job"].map((item, index) => (
                <div
                  key={index}
                  className="text-black border border-black py-1 px-3 rounded-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <Heart size={20} />
          </div>
        </div>
      </div>
    </>
  );
}
