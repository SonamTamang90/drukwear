import { Link, NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const links = [
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Women",
    href: "/women",
  },
  {
    label: "kids",
    href: "/kids",
  },
  {
    label: "Accessories",
    href: "/accessories",
  },
];

function Header() {
  return (
    <header className="border-b border-border">
      <div className="container">
        <div className="py-4">
          {/* Logo and main nav */}
          <div className="flex items-center gap-5">
            <Link className="inline-block text-xl font-bold uppercase tracking-widest">
              Drukwear
            </Link>

            {/* Main nav */}
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavLink
                      to={link.href}
                      className="uppercase font-bold tracking-wider"
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {/* Main nav */}
          </div>
          {/* Logo and main nav ends here */}
        </div>
      </div>
    </header>
  );
}

export default Header;
