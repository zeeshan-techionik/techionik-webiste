import Link from "next/link";
import { NavLink } from "@/data/navLinks";
import Button from "@/components/Button";
import Image from "next/image";

interface NavMenuProps {
  navLinks: NavLink[];
}

const NavMenu: React.FC<NavMenuProps> = ({ navLinks }) => {
  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-7 items-center justify-center flex-1 relative font-inter text-[14px]-700 font-normal">
        {navLinks.map((link: NavLink) =>
          link.type === "button" ? (
            <Button
              key={link.name}
              text={link.name}
              href={link.href}
              size="medium"
              radius="full"
            />
          ) : link.children ? (
            <div key={link.name} className="relative group">
              <Link
                href={link.href || "#"}
                className="inline-flex items-center gap-2 text-white transition-colors duration-200 hover:text-[#F05323]"
              >
                {link.name}
                <Image
                  src="/icons/Vector.svg"
                  alt="arrow"
                  width={12}
                  height={12}
                />
              </Link>

              {/* Submenu */}
              <div className="absolute left-0 mt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                <div className="gradient-border p-0.5 rounded-md">
                  <div className="submenu-content bg-black rounded-sm overflow-hidden min-w-50 flex flex-col">
                    {link.children.map((child: NavLink, i: number) => (
                      <Link
                        key={child.name}
                        href={child.href!}
                        className={`block px-4 py-2 text-white hover:text-black hover:bg-white transition-colors 
                          ${ i !== link.children.length - 1
                            ? "border-b border-gray-700"
                            : ""
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.href!}
              className="text-white hover:text-[#F05323] font-weight-700 transition-colors duration-100"
            >
              {link.name}
            </Link>
          )
        )}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-white text-2xl cursor-pointer select-none"
        >
          ☰
        </label>

        <div className="peer-checked:flex hidden flex-col gap-2 p-6 absolute top-full left-0 w-full bg-black shadow-md backdrop-blur-md z-50">
          {navLinks.map((link) =>
            link.type === "button" ? (
              <Button
                key={link.name}
                text={link.name}
                href={link.href}
                size="medium"
                radius="full"
              />
            ) : link.children ? (
              <details key={link.name} className="flex flex-col">
                <summary className="flex justify-between items-center text-white font-sf font-normal cursor-pointer list-none">
                  {link.name}
                  <span className="inline-block w-3 h-2 border-t border-r border-white transform rotate-45 transition-transform"></span>
                </summary>
                <div className="flex flex-col ml-4 mt-1 gap-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href!}
                      className="text-white hover:text-black hover:bg-white transition-colors px-4 py-2"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                className="text-white hover:text-[#F05323] font-sf font-normal px-4 py-2"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default NavMenu;
