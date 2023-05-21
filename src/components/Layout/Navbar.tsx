import Link from "next/link";
import Lightning from "../Assets/Lightning";

const Navbar = () => {
  return (
    <nav className="mx-40">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Lightning
                size={50}
                className="text-sky-50 hover:text-[#04acf4]"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-sm font-bold text-sky-50 hover:text-[#04acf4]"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="rounded-md px-3 py-2 text-sm font-bold text-sky-50 hover:text-[#04acf4]"
              >
                ABOUT
              </Link>
              <Link
                href="/experience"
                className="rounded-md px-3 py-2 text-sm font-bold text-sky-50 hover:text-[#04acf4]"
              >
                EXPERIENCE
              </Link>
              <Link
                href="/projects"
                className="rounded-md px-3 py-2 text-sm font-bold text-sky-50 hover:text-[#04acf4]"
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="rounded-md px-3 py-2 text-sm font-bold text-sky-50 hover:text-[#04acf4]"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
