import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import { AlignJustify, X, ChevronRight } from "lucide-react";

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

function MainNav() {
  return (
    <>
      {/* Main menu for large screens */}
      {/* TODO: Fix <a> cannot appear as a descendant of <a>. Error Component Stack */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.label}>
              <NavLink to={link.href} className="uppercase tracking-wider">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Main menu for large screens ends here */}

      {/* Main menu for smaller screens */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <AlignJustify className="w-5 h-5" />
          </DrawerTrigger>
          <DrawerContent direction="right">
            <DrawerHeader className="flex items-center justify-between border-b border-border mb-4 px-6">
              <DrawerTitle className="uppercase font-semibold">
                Menus
              </DrawerTitle>
              <DrawerClose>
                <X />
              </DrawerClose>
            </DrawerHeader>
            <NavigationMenu className="px-6">
              <NavigationMenuList className="flex flex-col items-start">
                {links.map((link) => (
                  <NavigationMenuItem key={link.label} className="py-4">
                    <NavLink
                      to={link.href}
                      className="uppercase font-bold tracking-wider flex items-center gap-2 transition-colors duration-300 hover:text-brand"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </NavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Main menu for smaller screens end here */}
    </>
  );
}

export default MainNav;
