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
import ProtectAuthRoutes from "../protect-routes/ProtectAuth";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function ForgotPasswordForm({ className, ...props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { forgetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleForgetPassword = async (data) => {
    const { email } = data;
    if (email) {
      try {
        setIsLoading(true);
        const response = await forgetPassword(data);
        if (response.success) {
          toast({
            description:
              response.data || "Verification email sent to your account!",
          });
          setTimeout(() => {
            router.push("/auth/login");
          }, 3000);
        } else {
          setError(response.error);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ProtectAuthRoutes>
      <div
        className={cn(
          "flex flex-col gap-12 max-w-sm mx-auto w-full",
          className
        )}
        {...props}
      >
        <Card className="md:p-4">
          <CardHeader>
            <CardTitle className="text-2xl">Forgot your password?</CardTitle>
            <CardDescription>
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleForgetPassword)}>
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
                <Button
                  type="submit"
                  className="w-full mb-3"
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </div>
              {error && <ShowError message={error} />}
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
    </ProtectAuthRoutes>
  );
}
