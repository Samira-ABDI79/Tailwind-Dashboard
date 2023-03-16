import { Outlet } from "react-router-dom";
import { Appbar } from "./Appbar/Appbar"; 
import Navbar from "./Navbar/Navbar";


function Layout() {
  return (
    <>
<Appbar />
       <Navbar />
      <Outlet />
   
    </>
  );
}

export default Layout;
