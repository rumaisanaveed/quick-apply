import { AuthContextProvider } from "@/contexts/AuthContext";
import "./globals.css";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Quick Apply",
  description: "A web app to make your job application process easier",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-gray-50">
        <AuthSessionProvider>
          <AuthContextProvider>
            <Toaster position="top-center" />
            <div className="flex flex-col min-h-screen">{children}</div>
          </AuthContextProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
