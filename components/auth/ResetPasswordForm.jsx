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
import { useForm } from "react-hook-form";
import { validationRules } from "@/lib/validationRules";
import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import ShowError from "@/components/ui/error";
import ProtectAuthRoutes from "@/components/protect-routes/ProtectAuth";
import { useToast } from "@/hooks/use-toast";

export function ResetPasswordForm({ className, ...props }) {
  const { token } = useParams();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast();
  const { verifyToken, resetPassword } = useContext(AuthContext);
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
        setError("");
      }
    };
    handleVerifyToken();
  }, [token]);

  const handleResetPassword = async (data) => {
    const { password } = data;
    if (password) {
      setError("");
      setIsLoading(true);
      const response = await resetPassword({
        password,
        email: user?.email,
      });
      if (!response.success) {
        setError(response.error || "Something went wrong");
        setIsLoading(false);
      } else if (response.success) {
        setIsLoading(false);
        setError("");
        toast({
          description: "Password updated successfully!",
        });
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      }
    }
  };

  if (!isVerified) {
    return (
      <div>
        Your reset link is no longer valid. Try resetting your password again.
      </div>
    );
  }

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
                  disabled={error.length > 0 || isLoading}
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
