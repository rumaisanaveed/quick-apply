"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ShowError from "../ui/error";
import { validationRules } from "@/lib/validationRules";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import ProtectAuthRoutes from "../protect-routes/ProtectAuth";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitLogin = async (data) => {
    try {
      setIsLoading(true);
      const { email, password } = data;
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error) {
        setError("Invalid email or password");
        setTimeout(() => {
          setError("");
        }, 3000);
        if (res?.url) router.replace("/");
      } else {
        setError("");
      }
    } catch (error) {
      setError("An unexpected error occurred.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignin = () => {
    signIn("google");
  };

  return (
    <ProtectAuthRoutes>
      <div
        className={cn("flex flex-col gap-6 max-w-sm w-full mx-auto", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="m@example.com"
                    {...register("email", validationRules.email)}
                  />
                  {errors.email && <ShowError message={errors.email.message} />}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href={`/auth/forgot-password`}
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="text"
                    {...register("password", validationRules.password)}
                  />
                  {errors.password && (
                    <ShowError message={errors.password.message} />
                  )}
                  {error && <ShowError message={error} />}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Login
                </Button>
              </div>
            </form>
            <div className="flex flex-col gap-3 mt-3">
              <p className="text-gray-700 text-center text-sm">Or</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignin}
              >
                Continue with Google
              </Button>
              <div className="text-center text-sm pt-2">
                Don't have an account? &nbsp;
                <Link
                  href={`/auth/signup`}
                  className="underline underline-offset-4"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProtectAuthRoutes>
  );
}
