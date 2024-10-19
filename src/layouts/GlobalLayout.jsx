import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router-dom";

function GlobalLayout() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default GlobalLayout;
