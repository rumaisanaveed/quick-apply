import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectServerComponents({ children }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}
