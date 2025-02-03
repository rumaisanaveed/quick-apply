"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectClientComponents({ children }) {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [session, router]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
