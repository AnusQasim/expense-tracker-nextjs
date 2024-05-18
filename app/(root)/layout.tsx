import { FAB } from "@/components/fab";
import { TransactionModal } from "@/components/modals/transaction-modal";
import { Sidebar } from "@/components/sidebar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="grow h-screen overflow-y-auto overflow-x-hidden relative">
        <TransactionModal />
        <FAB />
        {children}
      </div>
    </div>
  );
}
