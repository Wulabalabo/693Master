'use client';

import { ConnectButton } from "@mysten/dapp-kit";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex p-6 border-4 rounded-3xl border-foreground">
      <aside className="font-bold basis-1/4">
        <h1 className="text-4xl">Nex Theater</h1>
      </aside>
      <div className="flex space-x-10 text-2xl items-center">
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Settings
        </Link>
      </div>
      <div className="ml-auto">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default NavBar;
