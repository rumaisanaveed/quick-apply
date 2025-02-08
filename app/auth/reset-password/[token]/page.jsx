import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import AuthLayout from "@/layouts/AuthLayout";

export const metadata = {
  title: "Quick Apply - Reset Password",
  description:
    "Set a new password for your Quick Apply account and regain access to your job application templates and saved data.",
};

export default function ResetPassword() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
