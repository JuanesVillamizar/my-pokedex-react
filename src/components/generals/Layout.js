import React from 'react';
import MainNavbar from "../MainNavbar";
import Footer from "../Footer";
import {PokemonProvider} from "../../context/PokemonContext";
import {PageProvider} from "../../context/PagesContext";
import NavShoppingCar from "../NavShoppingCar";

export const Layout = ({ children }) => {
    return (
        <>
            <PokemonProvider>
                <NavShoppingCar />
                <MainNavbar />
                <PageProvider>
                    {children}
                </PageProvider>
                <Footer />
            </PokemonProvider>
        </>
    );
}
export default Layout;