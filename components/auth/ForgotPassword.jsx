"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { validationRules } from "@/lib/validationRules";
import ShowError from "../ui/error";

export default function ForgotPasswordForm({ className, ...props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleResetPassword = (data) => console.log(data);

  return (
    <div className={cn("flex flex-col gap-12", className)} {...props}>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  {...register("email", validationRules.email)}
                />
                {errors.email && <ShowError message={errors.email.message} />}
              </div>
              <Button type="submit" className="w-full mb-3">
                Reset Password
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link
                href={`/auth/login`}
                className="underline underline-offset-4"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
