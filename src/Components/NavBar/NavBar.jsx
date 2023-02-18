import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavBar = () => {
    return (
      <Navbar expand="lg">
      <Container>
      <Navbar.Brand  >
              <img src='/Img/Icono1.png' alt="brand" className='Brand' /> 
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0 " >

            <Nav.Link href="#About Us" className='AboutUs'>About Us</Nav.Link>
            <Nav.Link href="#Book Online" className='BookOnline'>Book Online </Nav.Link>
            <Nav.Link href="#Weight Loss Programs" className='WeightLossPrograms'>Weight Loss Programs</Nav.Link>
            <Nav.Link href="#Real Patient Stories" className='RealPatientStories'>Real Patient Stories</Nav.Link>
            <Nav.Link href="#Locations" className='Locations'>Locations</Nav.Link>
            <Nav.Link href="#Blog" className='Blog'>Blog</Nav.Link>
            <Nav.Link href="#Shop" className='Shop'>Shop</Nav.Link>
            <Nav.Link href="#Subscription" className='Subscription'>Subscription</Nav.Link>

                      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )


}




export default NavBar








/*<Nav
 <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Link to='/list'>
            <Navbar.Brand >
              <img src='/Imagenes/logoE.jpeg' alt="brand" className='w-50'/> 
            </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to='/'  className='m-2 nav-link'>About Us </NavLink>            
            <NavLink to='/' className='m-2 nav-link'>Book Online </NavLink>
            <NavLink to='/' className='m-2 nav-link'>Weight Loss Programs</NavLink>
            <NavLink to='/' className='m-2 nav-link'>Real Patient Stories</NavLink>
            <NavLink to='/' className='m-2 nav-link'>Locations</NavLink>
            <NavLink to='/' className='m-2 nav-link'>Blog</NavLink>
            <NavLink to='/' className='m-2 nav-link'>Shop</NavLink>
            <NavLink to='/' className='m-2 nav-link'>Subscription</NavLink>
            
           
            
          </Nav>
          <Link to='/Cart' >
            <div className="d-flex justify-content-end ">
            <Cartwidget />
            {cantidadTotal() != 0 && cantidadTotal()}
            </div>
          </Link>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
*/