"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectAuthRoutes({ children }) {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [session, router]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
