import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Image from '../image/Logo.png';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const MainNavbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light>
                <img src={Image} alt="Poke API"/>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar className='justify-content-center'>
                    <Nav navbar>
                        <NavItem style={{margin: '0 auto'}}>
                            <Link to="/" className='text-dark text-decoration-none' >Inicio</Link>
                        </NavItem>
                        <NavItem style={{margin: '0 auto'}}>
                            <Link to='/types' className='text-dark text-decoration-none' >Tipos</Link>
                        </NavItem>
                        <NavItem style={{margin: '0 auto'}}>
                            <Link to='/shoppingCar' className='text-dark text-decoration-none' >Carrito de compras</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;