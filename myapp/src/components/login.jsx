import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './login.module.css';
import loginbg from './asserts/loginbg.png';
import imp from './asserts/imp.png';
import owner from './asserts/owner.png';
import register from './asserts/register.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';

const login = () => {
    return (
      <>
      <Whatsapp/>
      <header className={styles.nav_fixed}>
      <Navbar bg="light" expand="lg" className={styles.nav}>
        <Navbar.Brand>
        <div className={styles.navhead}>
        <Image src={logo} alt="Logo" fluid className={styles.logo} onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}/>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav_comp}>
            <Nav.Link href="/" style={{color: '#000000',paddingRight: '30px' }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color: '#000000',paddingRight: '30px' }}>About Us</Nav.Link>
            <Nav.Link href="/services" style={{color: '#000000',paddingRight: '30px' }}>Services</Nav.Link>
            <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
            <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
          </Nav>
          <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
        </Navbar.Collapse>
      </Navbar>
      </header>

<div>
<Image src={loginbg} alt="Image Description" fluid className={styles.logimg}/>
<div className={styles.logdiv} >
  <p className={styles.heading}>ACCOUNT LOGIN</p>
  <div className="container text-center">
  <div className="row">
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Client</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={imp} onClick={() => window.location.href = '/login/importer-exporter'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Owner</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={owner} onClick={() => window.location.href = '/login/owner'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" style={{width: "13rem", borderRadius: "20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "2px"}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: "#F46210", borderWidth: "5px"}}>Register</h5>
          <hr style={{borderColor: "#F46210", borderWidth: "3px"}}/>
          <Image src={register} onClick={() => window.location.href = '/register'} alt="Image Description" fluid style={{marginTop: "25px", marginBottom: "25px", cursor: "pointer"}}/>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>



      </>
    )
};

export default login;