import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mx-16 mt-1 rounded-full bg-slate-800">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Carlos Alberto"
              width={50}
              height={50}
            />
            </Link>
          </div>
          {}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-sky-400"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-sky-400"
              >
                About
              </Link>
              <Link
                href="/experience"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-sky-400"
              >
                Experience
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-sky-400"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-100 hover:text-sky-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
