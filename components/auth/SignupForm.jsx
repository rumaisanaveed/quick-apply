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
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ProtectAuthRoutes from "../protect-routes/ProtectAuth";

export function SignupForm({ className, ...props }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const { registerUser } = useContext(AuthContext);
  const [registering, setIsRegistering] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleRegister = async (data) => {
    try {
      setIsRegistering(true);
      const res = await registerUser(data);
      console.log(res);
      if (res.success) {
        router.push("/auth/login");
      } else {
        setError(res.error);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <ProtectAuthRoutes>
      <div
        className={cn("flex flex-col gap-6 w-full max-w-sm mx-auto", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              Enter your username and email to crea account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Example Username"
                    {...register("username", validationRules.username)}
                    aria-invalid={errors.username ? "true" : "false"}
                  />
                  {errors.username && (
                    <ShowError message={errors.username.message} />
                  )}
                </div>

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
                <Button type="submit" className="w-full" disabled={registering}>
                  Signup
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account? &nbsp;
                <Link
                  href={`/auth/login`}
                  className="underline underline-offset-4"
                >
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </ProtectAuthRoutes>
  );
}
