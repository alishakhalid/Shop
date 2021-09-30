import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Header.css";
import Search from "./Search";

export default function Header() {
  return (
    <Navbar className="header-navbar">
      <Navbar.Brand href="/">Khalid's Cosmetics</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/product">LIP KITS</Nav.Link>
          <Nav.Link href="/skin">SKIN</Nav.Link>
          <Nav.Link href="/add">Add new Lipkit</Nav.Link>
          <Nav.Link href="/registrate">Registrate</Nav.Link>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
}
