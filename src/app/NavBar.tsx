'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar() {
  const pathname = usePathname(); // we need this to display active styling in navigation menu
  return (
    <Navbar
      bg='primary'
      variant='dark'
      sticky='top'
      expand='sm'
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand
          as={Link}
          href={'/'}
        >
          NEXT JS Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link
              as={Link}
              href='/newRoute'
              active={pathname === '/newRoute'}
            >
              New Route
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
