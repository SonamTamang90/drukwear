import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  Keyboard,
  Settings,
  CreditCard,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "../../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import WishlistCard from "@/feature/wishlist/WishlistCard";

function HeaderActions() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Sheet>
                <SheetTrigger>
                  <Heart className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader className="text-base uppercase font-bold tracking-wider  border-b border-border p-6">
                    Your wishlist
                  </SheetHeader>
                  <div className="p-5 space-y-5">
                    <WishlistCard />
                  </div>
                </SheetContent>
              </Sheet>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Sheet>
                <SheetTrigger>
                  <ShoppingBag className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader className="text-base uppercase font-bold tracking-wider  border-b border-border p-6">
                    Your Cart
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </NavigationMenuLink>
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
          {/* User menu ends here */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HeaderActions;
