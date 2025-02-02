import { SignupForm } from "@/components/auth/SignupForm";
import AuthLayout from "@/layouts/AuthLayout";

export default function Signup() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
