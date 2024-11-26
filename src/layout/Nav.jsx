
import { NavLink} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import storeArray from '../data/storeArray';
import { coin } from "../components/coin";

export default function Nav(){
    const hamburger =  <i aria-label="hamburger-navigation" className="bi bi-list"></i>    ;

    
    const storeRoutes = storeArray.map((store) => {
        const {id, name, path} = store;
        return (
            <NavLink to={`/${path}`} key={id}> {name} </NavLink>
        )
    })

    return(
        <header>
            <div className="d-flex align-items-end">
                <div className="pb-1 ps-2">
                    {coin}
                </div>
                <NavDropdown className="mobile" title={hamburger}>
                    <NavLink to="/"> Free at Epic </NavLink>
                    <NavLink to="/free/pc"> Free PC </NavLink>
                    <NavLink to="/all" >View All</NavLink>
                    <NavLink to="/game" >Lowest Price By Game</NavLink>
                    {...storeRoutes}
                </NavDropdown>
                <div className="link-row">
                    <NavDropdown title="Free Games">
                            <NavLink to="/" > Free at Epic </NavLink>
                            <NavLink to="/free/pc"> Free PC </NavLink>
                    </NavDropdown>
                    <NavLink to="/all" >View All</NavLink>
                    <NavDropdown title="Search By Store">
                            {...storeRoutes}
                    </NavDropdown>
                    <NavLink to="/game" >Lowest Price By Game</NavLink>
                </div>

                <div className="pb-1 pe-2">
                    {coin}
                </div>
            </div>
        </header>
    )
}