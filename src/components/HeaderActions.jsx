import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  Keyboard,
  Settings,
  CreditCard,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "./ui/dropdown-menu";

function HeaderActions() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/cart" className="uppercase font-bold tracking-wider">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <ShoppingBag className="w-5 h-5" />
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="/wishlist">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Heart className="w-5 h-5" />
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>

          {/* User menu */}
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <User className="w-5 h-5" />
                </NavigationMenuLink>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-neutral-100 w-56 border-border shadow-sm rounded-md">
                <DropdownMenuLabel className="p-3">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border-b border-border" />
                {/* Group 1 */}
                <DropdownMenuGroup className="space-y-3 p-3">
                  <DropdownMenuItem className="flex items-center text-sm hover:bg-neutral-200">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-sm">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-sm">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Setting</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-sm">
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="border-b border-border" />
                <DropdownMenuItem className="flex items-center text-sm p-3">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                {/* Group 1 */}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HeaderActions;
