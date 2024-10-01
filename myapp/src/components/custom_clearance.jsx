import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './custom_clearance.module.css';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';
import custom_clearance from './asserts/custom_clearance.png';



class Custom_clearance extends React.Component {

render() {
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

    <div className={styles.container}>
      <Image src={custom_clearance} alt="custom_clearance" fluid className={styles.contact_main} />
    </div>

    <div className={styles.text}>
        <p className={styles.text}>From specializing of shipment to freight forwarding and inland transportation, our advance solution & strong co-operation with our logistics partners ensure complete control, fast transit time & Seamless connection to final destination.</p>
        <p>Service include - </p>
        <p>
            <ul>
                <li>Import clearance by Air / Sea.</li>
                <li>Export clearance by Air/ Sea.</li>
                <li>Suggest effective packing for economic handling & safety.</li>
                <li>Documentation of custom clearance.</li>
                <li>Shipment examination.</li>
                <li>Port handling.</li>
                <li>Handling of stuffing at port, ICD's and customers warehouse.</li>
                <li>Re-import & Re-export custom clearance.</li>
                <li>Custom clearance under HSS (High Seas Sales).</li>
                <li>Project Clearance.</li>
            </ul>
        </p>
    </div>

    

    <div className={styles.footer}>
      <div class="container text-center">
        <div class="row">
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <div className={styles.navhead}>
        <Image src={logo} alt="Logo" fluid onClick={() => window.location.href = '/'} style={{ cursor: 'pointer', width: "400px"}}/>
        </div>
            </div>
            <div style={{marginLeft:"120px"}}>
              <Image src={footer_call} alt="Image Description" fluid/>
              <p className={styles.footertext}>+91 89760 71984</p>
            </div>
            <div style={{marginLeft:"120px"}}>
              <Image src={footer_mail} alt="Image Description" fluid/>
              <p className={styles.footertext}>support@gstlogistics.co.in</p>
            </div>
            <div style={{marginLeft:"120px"}}>
              <Image src={footer_address} alt="Image Description" fluid style={{marginBottom:"140px"}}/>
              <p className={styles.footertext}>B1 102 Shree Ganesh Tower, <br/> Near Gaon Devi Maiden, <br/> opp. Rajmal Lakhiman Jewellers, <br/> Nuapada, Thane West 400602</p>
            </div>
            <div style={{marginLeft:"120px", marginTop: "-45px"}}>
              <Image src={footer_instagram} style={{width: "30px", height: "30px"}} alt="Image Description" fluid />
              <a href="https://www.instagram.com/gst_logistics?igsh=dG9haHhuczU0c3l1" className={styles.footertext} style={{  textDecoration: "none" }}>
                Instagram
              </a>
            </div>
          </div>
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px", marginTop:"50px"}}>
            <span style={{fontWeight: "600", color: "white", fontSize:"22px", display: "block"}}>OUR INFO</span>
            </div>
            <div>
              <p className={styles.footertext}><a href='/about' style={{textDecoration: "none", color: "white"}}>About Us</a></p><br/>
              <p className={styles.footertext}><a href='/services' style={{textDecoration: "none", color: "white"}}>Services</a></p><br/>
              <p className={styles.footertext}><a href='/contact' style={{textDecoration: "none", color: "white"}}>Contact Us</a></p><br/>
              <p className={styles.footertext}><a href='/knowledge' style={{textDecoration: "none", color: "white"}}>Knowledge base</a></p><br/>
            </div>
          </div>
        </div>
      </div>
      <hr style={{color: "white", width: "1200px", borderWidth: "3px"}}/>
      <p style={{fontSize: "1px"}}>3rd party logistics,3rd party logistics companies, 3pl providers, air cargo logistics, air freight companies, air freight logistics, air logistics, cross border logistics, freight forwarding companies, freight shipping services, freight logistics, global logistics services, freight management companies, freight transportation services, global transport and logistics, global logistics services, international shipping services, logistics company,logistics provider, logistics consultant, logistics service provider, logistics shipping company, logistics solutions, logistics transportation, marine logistics, sea freight shipping, shipping and logistics, supply chain logistics, third party logistics provider, third party logistics companies, warehousing and logistics, supply chain management, warehousing solutions, customs clearance, distribution services, import/export services,shipping solutions, , e-commerce logistics, temperature-controlled logistics, hazardous cargo handling, express delivery services, third-party logistics (3PL), freight management, logistics consulting, global logistics, project cargo, cross-border shipping, LTL shipping (Less-than-Truckload), FTL shipping (Full Truckload), logistics technology solutions, warehouse management, last mile delivery, international freight services, domestic shipping services, export logistics, import logistics, customs brokerage, logistics optimization, cargo tracking, inventory management, logistics planning, transport logistics, container shipping, shipping logistics, heavy haulage, cargo insurance, efficient logistics, reliable logistics services, affordable logistics solutions</p>
      <div>
        <p style={{color: "white", marginTop: "50px"}}>GST LOGISTICS | ALL RIGHTS RESERVED</p><br/>
      </div>
    </div>

    </>
  );
}}

export default Custom_clearance;
