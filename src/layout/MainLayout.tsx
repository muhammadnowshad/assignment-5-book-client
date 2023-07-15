import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bannar from "../components/ui/Bannar/Bannar";


export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Bannar></Bannar>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
