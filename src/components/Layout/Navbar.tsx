import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type Dispatch, type SetStateAction } from "react";
import SvgIcon from "../SvgIcon";

const navItems = [
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
    <aside>
      <div>
        <div
          //prettier-ignore
          className={classNames(`${ open ? "fixed" : "relative" } z-50 ml-4 mt-4 flex h-8 w-8 flex-col items-center justify-between md:hidden`)}
          onClick={() => setOpen(!open)}
          aria-valuetext={open ? "sidebar open" : "sidebar closed"}
        >
          <span
            className={`h-1 w-full transform rounded-lg bg-sky-50 transition duration-300 ease-in-out ${
              open ? "translate-y-3.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-1 w-full rounded-lg bg-sky-50 transition-all duration-700 ease-in-out ${
              open ? "rotate-[405deg] bg-transparent" : ""
            }`}
          />
          <span
            className={`h-1 w-full transform rounded-lg bg-sky-50 transition duration-300 ease-in-out ${
              open ? "-translate-y-3.5 -rotate-45" : ""
            }`}
          />
        </div>
        <div
          className={classNames(
            `fixed inset-y-0 left-0 z-20 bg-black bg-opacity-50 ${
              open ? " w-full" : "max-w-0"
            }`
          )}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`fixed left-0 top-0 z-30 h-full w-[70%] transform bg-shaman-700 ${
            open ? "-translate-x-0 " : "-translate-x-full "
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="ml-4 mt-20 flex flex-col text-3xl font-bold text-sky-50">
            {[{ path: "/", name: "Home" }, ...navItems].map(
              ({ path, name }) => {
                return (
                  <Link
                    key={name}
                    href={path}
                    className="overflow-hidden py-3 hover:bg-sky-50 hover:text-[#04acf4]"
                    onClick={() => setOpen(!open)}
                  >
                    {name}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

const DesktopNavBar = () => {
  const pathName: string = usePathname() || "/";
  return (
    <div className="m-4 flex w-screen items-center justify-center space-x-10">
      <div className="flex-shrink-0">
        <Link href="/">
          <SvgIcon
            name="thunder"
            size={50}
            className="p-2 text-sky-50 hover:rounded-full hover:bg-white hover:text-[#04acf4]"
          />
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
                isActive ? "rounded-full bg-black/10" : ""
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
      </div>
      <div className="hidden sm:flex">
        <DesktopNavBar />
      </div>
    </nav>
  );
};

export default Navbar;
