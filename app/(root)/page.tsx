import { Sidebar } from "@/components/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      Hello World
      <UserButton />
    </>
  );
}
