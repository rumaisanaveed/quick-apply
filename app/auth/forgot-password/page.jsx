import ForgotPasswordForm from "@/components/auth/ForgotPassword";
import AuthLayout from "@/layouts/AuthLayout";

export const metadata = {
  title: "Quick Apply - Forgot Password",
  description:
    "Reset your password easily if you've forgotten your login credentials. Enter your email to receive a password reset link.",
};

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
