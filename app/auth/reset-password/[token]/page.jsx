import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import AuthLayout from "@/layouts/AuthLayout";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
