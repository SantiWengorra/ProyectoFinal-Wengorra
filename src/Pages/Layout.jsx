import {Outlet} from "react-router-dom";
import Navvar from "../components/Navbar/Navbar";
import Titulo from "../components/Titulo";

function Layout(){
    return(
        <div>
            <Titulo/>
            <Navvar/>
            <Outlet/>
        </div>
    )
}
export default Layout;