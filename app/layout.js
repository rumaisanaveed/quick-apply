import "./globals.css";

export const metadata = {
  title: "Quick Apply",
  description: "A web app to make your job application process easier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
