export default function AuthLayout({ children, className }) {
  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center p-6 md:p-10 ${className}`}
    >
      <div className="max-w-sm p-6">{children}</div>
    </div>
  );
}
