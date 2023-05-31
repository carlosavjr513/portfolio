import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type Dispatch, type SetStateAction } from "react";
import Lightning from "../Assets/Lightning";

const navItems = [
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const MobileNavBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div
        className={`absolute left-0 top-0 z-30 h-screen w-3/5 transform bg-slate-900 ${
          open ? "-translate-x-0" : "-translate-x-full"
        } drop-shadow-md filter transition-transform duration-300 ease-in-out`}
      >
        <div className="ml-4 mt-20 flex flex-col text-3xl font-bold text-sky-50">
          <div className="flex-shrink-0 self-center">
            <Link href="/" onClick={() => setOpen(!open)}>
              <Lightning
                size={50}
                className="text-sky-50 hover:text-[#04acf4]"
              />
            </Link>
          </div>
          {navItems.map(({ path, name }) => {
            return (
              <Link
                key={name}
                href={path}
                className="my-3 hover:bg-sky-50 hover:text-[#04acf4]"
                onClick={() => setOpen(!open)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={classNames(
          `fixed inset-y-0 left-0 z-20 bg-black opacity-50 ${
            open ? " w-full" : "max-w-0"
          }`
        )}
        onClick={() => setOpen(!open)}
      ></div>
    </div>
  );
};

const DesktopNavBar = () => {
  const pathName: string = usePathname() || "/";
  return (
    <div className="m-4 flex items-center space-x-10">
      <div className="flex-shrink-0">
        <Link href="/">
          <Lightning size={50} className="text-sky-50 hover:text-[#04acf4]" />
        </Link>
      </div>
      {navItems.map(({ path, name }) => {
        const isActive = path === pathName;
        return (
          <Link
            key={name}
            href={path}
            className={classNames(
              `${
                isActive ? "rounded-full bg-white/20" : ""
              } px-3 py-2 text-sm font-bold text-sky-50 hover:rounded-full hover:bg-sky-50 hover:text-[#04acf4]`
            )}
          >
            {name.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="items-center">
      <div className="sm:hidden">
        <MobileNavBar open={open} setOpen={setOpen} />
        <div
          className="relative z-50 ml-4 mt-4 flex h-8 w-8 flex-col items-center justify-between md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full transform rounded-lg bg-sky-50 dark:bg-sky-50 transition duration-300 ease-in-out ${
              open ? "translate-y-3.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-sky-50 dark:bg-sky-50 transition-all duration-300 ease-in-out ${
              open ? "max-w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-sky-50 dark:bg-sky-50 transition duration-300 ease-in-out ${
              open ? "-translate-y-3.5 -rotate-45" : ""
            }`}
          />
        </div>
      </div>
      <div className="hidden max-w-full justify-center sm:flex">
        <DesktopNavBar />
      </div>
    </nav>
  );
};

export default Navbar;
