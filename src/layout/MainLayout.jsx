
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from './Nav';
import { StoreProvider } from "../context/StoreContext";

import './MainLayout.css';

export default function MainLayout(){

    return(
        <div className="layout">
            <Header />
            <Nav />
            <div className="page-content">
                <StoreProvider>
                    <Outlet />
                </StoreProvider>
            </div>
            <Footer />
        </div>
    )
}