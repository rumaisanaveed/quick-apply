import ContactForm from "@/components/ui/custom/contact/ContactForm";
import { Faqs } from "@/components/ui/custom/Faqs";
import SidebarLayout from "@/layouts/SidebarLayout";

export const metadata = {
  title: "Quick Apply - Help & Support",
  description:
    "Find answers to common questions, and contact support for assistance with Quick Apply.",
};

export default function HelpAndSupport() {
  return (
    <SidebarLayout>
      {/* user guide by showing video */}
      <div className="flex flex-col gap-8 max-w-sm mx-auto">
        <Faqs />
        <ContactForm />
      </div>
    </SidebarLayout>
  );
}
