import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary  text-gray-200 p-4">
      <div className="flex-center wrapper flex-between md:flex-row flex-col gap-4 p-5">
        <Link href="/">
          <Image src="/assets/images/evently-logo.png" alt="logo" width={128} height={3} />
        </Link>
        <p>&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
