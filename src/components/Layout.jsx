import { Outlet } from "react-router-dom";
import FooterPage from "./Footer";
import HeaderPage from "./Header";


const Layout = () => {
  return (
    <>
      <HeaderPage />
      <main className="pt-20">
        <Outlet />
      </main>
      <FooterPage />
    </>
  );
};

export default Layout;
