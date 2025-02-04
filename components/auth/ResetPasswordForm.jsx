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
import { validationRules } from "@/lib/validationRules";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AuthContext } from "@/contexts/AuthContext";
import ShowError from "@/components/ui/error";
import ProtectAuthRoutes from "@/components/protect-routes/ProtectAuth";

export function ResetPasswordForm({ className, ...props }) {
  const { token } = useParams();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const { data: session, status } = useSession();
  const { verifyToken } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    const handleVerifyToken = async () => {
      const body = JSON.stringify({
        token: token,
      });

      setError("");
      const response = await verifyToken(body);

      if (!response.success) {
        setError(response.error);
        setIsVerified(false);
      } else {
        setUser(response.data.user);
        setIsVerified(true);
      }
    };
    handleVerifyToken();
  }, [token]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleResetPassword = async () => {};

  return (
    <ProtectAuthRoutes>
      <div
        className={cn("flex flex-col gap-6 max-w-sm w-full mx-auto", className)}
        {...props}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>
              Enter your new password to update your password!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleResetPassword)}>
              <div className="flex flex-col gap-6">
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
                <Button
                  type="submit"
                  className="w-full"
                  disabled={error.length > 0}
                >
                  Reset Password
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </ProtectAuthRoutes>
  );
}
