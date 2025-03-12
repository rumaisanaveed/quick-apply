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
      {/* TODO : user guide by showing video */}
      <div className="w-full px-10">
        {/* <Faqs /> */}
        <ContactForm />
      </div>
    </SidebarLayout>
  );
}
