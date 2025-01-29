//use of DropDownMenu and Button from shadCnui
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, CopyCheck, Group } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-zinc-700">
      <div className="max-w-screen-xl px-10 py-4 mx-auto flex flex-row justify-between items-center gap-6">
        <div className="text-3xl font-semibold text-white">LOGO</div>
        <div className="flex flex-row gap-6 items-center text-white text-lg font-semibold">
          <Link
            href="/"
            className="hover:text-red-400 duration-300 transition-colors"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none inline-flex gap-2 group">
              More
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>
                  <User />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>
                  <CopyCheck />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Team
                <DropdownMenuShortcut>
                  <Group />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuLabel className="inline-flex gap-4">
                More Menu
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Arrow</DropdownMenuSubTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-44"
                  side="right"
                >
                  <DropdownMenuLabel>Here You Go</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>New BookMarks</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/"
            className="hover:text-red-400 duration-300 transition-colors"
          >
            Services
          </Link>
          <Button variant={"default"} size={"lg"}>
            Contact Us
          </Button>
          <Button asChild variant={"destructive"}>
            <Link href="/log-in">Log in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
