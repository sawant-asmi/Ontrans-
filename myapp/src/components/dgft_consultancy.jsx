import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './dgft_consultancy.module.css';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';
import dgft_consultancy from './asserts/dgft_consultancy.png';



class Dgft_consultancy extends React.Component {

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
      <Image src={dgft_consultancy} alt="custom_clearance" fluid className={styles.contact_main} />
    </div>

    <div className={styles.text}>
        <p className={styles.text}>We are in the business of export import consultancy offering our effective advisory and consulting services in DGFT and Customs related matters . We act as a mediator to offer between exporter/importer and the government. Our excellent track record in field of foreign trade policies, litigation, disputes and regulatory services enable us to solve client queries seamlessly. Key services under this segment are listed below.</p>
        <p>1. Import Export Code Number (IEC):</p>
        <p className={styles.text1}>We provide consultancy service to obtain new Import Export Code Number (IEC). In addition, we deliver Import Export Code Number modification services within 7 working days from date of submission pan India.</p>
        <p>2. Advance Authorization Scheme:</p>
        <p className={styles.text1}>We deliver Advance Authorization consulting to obtain Advance license under Standard Input Output Norms (SION) and fixation of norms. Some of our other services include Duty Free Import Authorization (DFIA) consulting, deemed exports, and redemption and amendment of advance license. Additionally, we deliver consulting for the closure and bond cancellation of advance license.</p>
        <p>3. Export House Registration:</p>
        <p className={styles.text1}>We render services to obtain Export House Registration and a star export house status corresponding to the criteria met by the client.</p>
        <p>4. Trading of Export Import License:</p>
        <p className={styles.text1}>We get the best market rates to the clients who wish to buy or sell their duty credit slips including MEIS, SEIS, FMS, FPS & MLFPS licenses.</p>
        <p>5. Export Promotion Capital Goods (EPCG)</p>
        <p className={styles.text1}>We provide services to obtain Export Promotion Capital Goods (EPCG) licenses to enable duty free import of capital goods, parts & components.</p>
        <p>6. Merchandise Export from India Scheme (MEIS) and Service Exports from India Scheme (SEIS)</p>
        <p className={styles.text1}>We provide services to help the exporters obtain incentives on FOB value of goods associated with Merchandise Exports from India Scheme (MEIS) & Service Exports from India Scheme (SEIS) in the form of duty credit scripts. As a part of this services we provide, MEIS/SEIS Registration and liasoning.</p>
        <p>7. 100% Export Oriented Unit (EOU)/SEZ</p>
        <p className={styles.text1}>We render services for setting up and debonding a 100% Export Oriented Unit to companies operating across various industry verticals.</p>
        <p>8. Export Promotional Council Registration:</p>
        <p className={styles.text1}>We help the manufacturers/exporters with the guidelines get the membership of Export Promotion Council (EPC) of various industrial sectors. This membership help the companies to gauge the industry dynamics and trends, which help them boost exports. In addition, this helps the companies to participate in trade-fairs & exhibitions and meet foreign buyers.</p>
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

export default Dgft_consultancy;
