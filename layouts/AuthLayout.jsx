export default function AuthLayout({ children, className }) {
  return (
    <div
      className={`flex min-h-screen w-full bg-gray-50 items-center justify-center p-6 md:p-10 ${className}`}
    >
      <div className="max-w-sm bg-white shadow-md rounded-lg p-6">
        {children}
      </div>
    </div>
  );
}
