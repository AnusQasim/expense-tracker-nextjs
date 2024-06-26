export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-full flex items-center justify-center">
      {children}
    </div>
  );
}
