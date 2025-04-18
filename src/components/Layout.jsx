import { Outlet } from "react-router-dom";
import FooterPage from "./Footer";
import HeaderPage from "./Header";

const Layout = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;
