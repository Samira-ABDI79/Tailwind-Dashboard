import { Outlet } from "react-router-dom";
import { Appbar } from "./Appbar/Appbar"; 



function Layout() {
  return (
    <>
<Appbar />
    
      <Outlet />
   
    </>
  );
}

export default Layout;
