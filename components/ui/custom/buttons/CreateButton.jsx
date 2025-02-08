import { Plus } from "lucide-react";
import Link from "next/link";

export default function CreateButton() {
  return (
    <Link
      href="/new-template"
      className="border border-black rounded-full text-black text-base px-4 py-2 flex items-center gap-1"
    >
      <Plus size={18} color="#000000" />
      <p>Create</p>
    </Link>
  );
}
