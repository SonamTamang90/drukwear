import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Header() {
  return (
    <header className="border-b border-border">
      <div className="container">
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo and main nav */}
            <div className="flex items-center gap-5">
              <Logo />
              <MainNav />
            </div>
            {/* Logo and main nav ends here */}

            {/* Header actions  */}
            <HeaderActions />
            {/* Header actions ends here */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
