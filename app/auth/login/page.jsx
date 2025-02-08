import { LoginForm } from "@/components/auth/LoginForm";
import AuthLayout from "@/layouts/AuthLayout";

export const metadata = {
  title: "Quick Apply - Login",
  description:
    "Access your Quick Apply account to manage job application templates, track favorites, and streamline your job search process.",
};

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
