import Head from "next/head";
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex h-full min-h-screen flex-col min-w-full w-full">
      <Head>
        <title>{title ? title : "Carlos Alberto"}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="-z-10">
        <div className="fixed -left-2 top-[35rem] border-b-[30rem] border-l-[15rem] border-b-transparent border-l-maelstrom-600 blur-md" />
        <div className="fixed -right-2 top-0 border-r-[15rem] border-t-[20rem] border-b-transparent border-r-maelstrom-600 border-t-transparent blur-md" />
      </div>
      <main className="z-0">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
