import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import { Outlet } from "react-router-dom";

function GlobalLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default GlobalLayout;
