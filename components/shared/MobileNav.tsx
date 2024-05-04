import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <IoMdMenu className="text-3xl" />
        </SheetTrigger>
        <SheetContent className="bg-white md:hidden">
          <Image
            src="/assets/images/evently-logo.png"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
