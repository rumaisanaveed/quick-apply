export default function AuthLayout({ children, className }) {
  return (
    <div
      className={`flex min-h-svh w-full bg-gray-50 items-center justify-center p-6 md:p-10 ${className}`}
    >
      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
