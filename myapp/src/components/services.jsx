import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './services.module.css';
import services_main from './asserts/services_main.png';
import sea from './asserts/sea.png';
import air from './asserts/air.png';
import service1 from './asserts/service1.png';
import service2 from './asserts/service2.png';
import service3 from './asserts/service3.png';
import service5 from './asserts/service5.png';
import service7 from './asserts/service7.png';
import service8 from './asserts/service8.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';

const services = () => {
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
          <Nav.Link href="/services" style={{color: '#F46210',paddingRight: '30px' }}>Services</Nav.Link>
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
          <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <div className={styles.container}>
      <Image src={services_main} alt="Image Description" fluid className={styles.services_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>Services</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR SERVICES</span>
    </div>
    
    <div className={styles.text}>
    MOVING YOUR PRODUCTS ACROSS ALL BORDERS SAFELY
    </div>

    <div>
    <div className="container text-center" style={{padding:"100px", marginLeft: "260px", maxWidth: "80%"}}>
  <div className="row">
    <div className="col" >
    
    <div className="card" style={{width: "16rem",height:"20rem",backgroundColor:"#7676C2", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{color:"#FF9F69", padding:"20px", fontSize:"25px"}}>SEA FREIGHT</h5>
    <p className="card-text" style={{fontSize:"20px", color:"#ffffff"}}>Fast, Reliable and accurate Shipment services right at your ease.</p>
    {/* <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px"}}/> */}
  </div>
  <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px", marginRight:"300px", marginTop:"10px"}}/>
</div>

    </div>
    <div className="col">
    <div className="card" style={{width: "16rem",height:"20rem", backgroundColor:"#7676C2", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)"}}>
  <div className="card-body">
    <h5 className="card-title" style={{color:"#FF9F69", padding:"20px", fontSize:"25px"}}>AIR FREIGHT </h5>
    <p className="card-text" style={{fontSize:"20px", color:"#ffffff"}}>Fast, Reliable and accurate Shipment services right at your at your ease.</p>
    {/* <Image src={sea} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px"}}/> */}
  </div>
  <Image src={air} alt="Image Description" fluid style={{width:"100px", height:"100px", marginLeft:"200px", marginRight:"300px", marginTop:"10px"}}/>
</div>
    </div>
    
  </div>
</div>
    </div>

    {/**services ke cards */}
    <div style={{maxWidth: "90%", marginLeft: "110px"}}>
    <div className="container text-center">
  <div className="row" style={{padding:"50px 0px30px 0px"}}>
    <div className="col">
    <Image src={service1} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>ISO Tank Container</strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{textAlign:"justify", marginTop:"30px", fontWeight:"500"}}>
    At GST Logistics, we offer specialized ISO Tank Container services for safe, efficient transport of bulk liquids, gases, and powders. Our ISO-compliant containers ensure safety and compliance for both hazardous and non-hazardous materials. We provide global transport solutions by air and sea, tailored to your needs. <br/></p>
  </div>
</div>
    </div>
    <div className="col">
    <Image src={service2} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>Pharmaceuticals & Chemicals</strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{marginTop:"20px", fontWeight:"500",  textAlign: "justify"}}>
    

    With years of expertise, we are the ideal choice for handling pharmaceuticals and chemicals. Our experience ensures smooth, efficient processing. We provide temperature-controlled solutions, adhere to GDP and GMP standards, and offer secure handling for pharmaceuticals. For chemicals, we use specialized equipment and comply with international safety standards.

    </p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service3} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>Refer Cargo</strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>At GST Logistics, we offer premium reefer cargo services for temperature-sensitive goods. Our advanced refrigerated containers ensure precise temperature control Our experienced team offers flexible and efficient solutions to meet your specific needs, keeping your products safe and fresh throughout the supply chain.</p>
  </div>
</div>
    </div>
  </div>

  <div className="row" style={{padding:"50px 0px 30px 0px"}}>
    <div className="col">
      <Image src={service7} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>DGFT Consultant</strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>Our DGFT Consultant services streamline your export and import processes by providing expert guidance on compliance with the Directorate General of Foreign Trade (DGFT) regulations. We assist with documentation, licensing, and regulatory requirements to ensure smooth and efficient trade operations.</p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service5} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>Customs Clearance Facility</strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}> At GST Logistics, We handle all aspects of customs documentation, compliance, and regulatory requirements to ensure seamless and timely clearance of your shipments. Rely on us to navigate complex customs procedures with precision and professionalism, streamlining your international trade operations.</p>
  </div>
</div>
    </div>
    <div className="col">
      <Image src={service8} alt="Image Description" fluid style={{width:"70px", height:"80px", marginLeft:"115px", marginRight:"300px", marginTop:"10px"}}/>
    <div className="card" style={{width: "20rem", padding:"20px", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)",height:"450px"}}>
  <div className="card-body">
    <h5 className="card-title"><strong>Hazardous Container </strong></h5>
    {/* <h6 className="card-subtitle mb-2 text-body-secondary" style={{padding:"10px", color:"#FF9F69"}}>*  Why choose us ?  *</h6> */}

    <p className="card-text" style={{marginTop:"20px", fontWeight:"500", textAlign: "justify"}}>we offer specialized hazardous container services for both haz and non-haz shipments. Our team is adept in handling hazardous documentation and uses UN-certified packaging to ensure compliance with international regulations. With Dangerous Goods Certified staff, we guarantee efficient management of all dangerous goods, ensuring your shipments are handled with safety and professionalism</p>
  </div>
</div>
    </div>
  </div>

  
    

</div>
    </div>

    <div className={styles.footer}>
      <div class="container text-center">
        <div class="row">
          <div class="col" style={{textAlign:"left"}}>
            <div style={{marginBottom:"50px"}}>
            <div className={styles.navhead}>
        <Image src={logo} alt="Logo" fluid onClick={() => window.location.href = '/'} style={{ cursor: 'pointer', width: "300px"}}/>
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
};

export default services;