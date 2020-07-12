import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink } from "reactstrap";

import "../../styles/components/nav.css";

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    let loc = useLocation();

    useEffect(() => {
        if (loc.pathname === "/" || loc.pathname === "/about" || loc.pathname === "/project" ? "" : "nav-pink") {
            document.getElementById("nav").classList.remove("navbar-dark");
            document.getElementById("nav").classList.add("navbar-light");
        } else {
            document.getElementById("nav").classList.remove("navbar-light");
            document.getElementById("nav").classList.add("navbar-dark");
        }
    }, [loc])

    return (
        <Navbar id="nav" className={"nav-default-back " + (loc.pathname === "/" || loc.pathname === "/about" || loc.pathname === "/project"? "" : "nav-pink")} dark expand="md">
            <NavbarBrand href="/#/"> VW </NavbarBrand>

            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <a className="nav-resume nav-link" href="./victor_wang_resume.pdf" download > Resume </a>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/about">
                            About Me
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/project">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/contact">
                            Contact Me
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
