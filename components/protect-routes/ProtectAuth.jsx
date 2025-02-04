"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function ProtectAuthRoutes({ children }) {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    } else if (status === "unauthenticated") {
      setIsLoading(false);
    }
  }, [status, router]);

  if (isLoading) {
    return <Progress value={33} className="w-[60%]" />;
  }

  return <>{children}</>;
}
