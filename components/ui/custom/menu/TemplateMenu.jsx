import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

export default function TemplateDropdownMenu() {
  return (
    // TODO : fix the increasing width issue of the template on icon click
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <EllipsisVertical
            color="#ffffff"
            size={20}
            className="cursor-pointer"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px] overflow-hidden">
        <DropdownMenuItem>
          <Link href={`/edit-template/35732857592`}>Use Template</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button type="button">Delete Template</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
