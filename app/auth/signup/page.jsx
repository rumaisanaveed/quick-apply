import { SignupForm } from "@/components/auth/SignupForm";
import AuthLayout from "@/layouts/AuthLayout";

export const metadata = {
  title: "Quick Apply - Sign Up",
  description:
    "Create your Quick Apply account to effortlessly manage job application templates and streamline your job search process.",
};

export default function Signup() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
