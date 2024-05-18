import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 border-b px-8 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold italic">
        EXT.
      </Link>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2">
        <Button variant={"outline"}>Log In</Button>
        <Button>Get Started</Button>
        <ModeToggle />
      </div>
    </header>
  );
};
