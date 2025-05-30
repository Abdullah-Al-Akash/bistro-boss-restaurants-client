import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  const isReg = location.pathname.includes("registration")
  return (
    <div>
      {isLogin || isReg || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || isReg || <Footer></Footer>}
    </div>
  );
};

export default Main;
