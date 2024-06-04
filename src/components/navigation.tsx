import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

function Navigation() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>My Website</NavbarBrand>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Navigation
