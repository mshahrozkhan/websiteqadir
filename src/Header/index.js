import React from 'react'
import "./index.css"
import Logo from "../Assert/logo.png"
import SearchIcon from '@material-ui/icons/Search';
import AndroidIcon from '@material-ui/icons/Android';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Button,Nav,NavDropdown ,Navbar,Form ,FormControl,Col,Row,Container} from 'react-bootstrap';

export default function index() {
    return (
        <div className="header">

{/* 
<Container>
  <Row>
    <Col md={6}>
      
    <img className="logo" src={Logo}/>
      1 of 2</Col>
    <Col md={6}>
      
   <h1 className="text-white"> 6</h1>


    </Col>

 

  </Row>
  
</Container> */}


<Navbar bg="" variant="dark">
   
   
<img className="logo" src={Logo}/>

    <Nav className="mr-auto ">
    <NavDropdown className="bg-color" title="3D Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title=" Freelance 3D Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Sell 3D Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="ARsenal for Business" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

    </Nav>

    <div className=" text-ceneter d-flex">

    <Form inline>
      <FormControl type="text" placeholder="Search" />
  
    </Form>






    <div className="icon_andriod headericon">
   
   <AndroidIcon/>
    </div >
   <div className="icon_basket headericon">
   <ShoppingBasketIcon/>
    </div>
    <div className="icon_title headericon">
        <span>Login
        </span>
    </div>


<h1>zxcz</h1>

    </div>
  </Navbar>


            
{/*             
            <img className="logo" src={Logo}/>





            <div className="header_nav ">
              
<div className="navbar">

     <NavDropdown  className="navbar text-light"  title="3D Models" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      </div>

      

      <div className="navbar">

<NavDropdown  className="navbar text-light" title="Freelance 3D Projects" id="collasible-nav-dropdown">
   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   <NavDropdown.Divider />
   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
 </NavDropdown>

 </div>
 <div className="navbar">

<NavDropdown  className="navbar text-light" title="Sell 3D Models" id="collasible-nav-dropdown">
   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   <NavDropdown.Divider />
   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
 </NavDropdown>

 </div>
 <div className="navbar">

<NavDropdown  className="navbar"  title="ARsenal for Business" id="collasible-nav-dropdown">
   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   <NavDropdown.Divider />
   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
 </NavDropdown>

 </div>

                </div>

                



    











        <div className="header_search ">
<input className="header_searchInput"
type="text"
/>
 <SearchIcon className="header_searchIcon"/>
</div>
<h1>dd</h1>

<div className="header_icon d-flex justify-content-evenly">
 







 <div className="icon_andriod">
   
<AndroidIcon/>
 </div >
<div className="icon_basket">
<ShoppingBasketIcon/>
 </div>
 <div className="icon_title">
     <span>Login
     </span>
 </div>

</div>






<h1>sdghf</h1>
<h3>zfzcz</h3>
<h3>cxcz</h3>
<h3>fsds</h3>
<h1>ghfgh</h1> */}
        </div>

        
    )
}
