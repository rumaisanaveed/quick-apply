import ProtectServerComponents from "@/components/protect-routes/ProtectServerComponents";

export default function Home() {
  return (
    <ProtectServerComponents>
      <h1>Dashboard Page</h1>
    </ProtectServerComponents>
  );
}
