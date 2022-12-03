import {Link} from "react-router-dom";
import Products from "../pages/Products";

function Sidebar(){
    return(
        <>
        <ul className="list-unstyled">
            <li>
                <Link to={'/Products'}>get all products</Link>
            </li>
            <li>
                {/* <Link to={''}>get all cateogries</Link> */}
            </li>
        </ul>
        </>
    )
}

export default Sidebar;