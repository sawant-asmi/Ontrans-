import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './knowledge.module.css';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import incoterms from './asserts/incoterms.png';
import blog_1 from './asserts/blog_1.png';
import blog_2 from './asserts/blog_2.png';
import blog_3 from './asserts/blog_3.png';
import blog_4 from './asserts/blog_4.png';
import blog_5 from './asserts/blog_5.png';
import blog_6 from './asserts/blog_6.png';
import blog_7 from './asserts/blog_7.png';
import blog_8 from './asserts/blog_8.png';
import blog_9 from './asserts/blog_9.png';
import blog_10 from './asserts/blog_10.png';
import blog_11 from './asserts/blog_11.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';

const knowledge = () => {
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
          <Nav.Link href="/knowledge" style={{color: '#F46210',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button  href = "/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>

    <div className={styles.tag} >
      <span className={styles.tag_text}>INCOTERMS</span>
    </div>
    <div>
    <Image src={incoterms} alt="Image Description" fluid style={{ display: "block", margin: "0 auto", marginBottom: "90px" }} />
    </div>

    
    <React.Fragment>
    <div className={styles.tag} style={{marginTop:"-20px"}}>
      <span className={styles.tag_text}>BLOGS</span>
    </div>
    <div className={styles.grid}>
      <div className="row">
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_1} className={styles.card_img} alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>EXPORT CLEARANCE PROCEDURE</h5>
              <p className="card-text">Export means expanding the market Size and extending product Cycle. Export is revenue generating process for any country. All the exports and Imports are governed by customs. Export without custom checking can be considered as smuggling so exporter has to declare his goods in Customs.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/export-clearance-procedure.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "48px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_2} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>TYPES OF VESSELS</h5>
              <p className="card-text">Almost 90% of International trade is done via sea Mode. SEA mode transport is more economical considering high volume shipments. Here I am going to brief about types of vessels and their applications.There are main 5 types of vessels in that  Fishing vessels are small in size. Their primary purpose is to carry out fishing in coastal waters or, if they are so designed, then in deep sea areas.</p>
              <a href="https://truptigirkar.blogspot.com/2020/07/types-of-vessels.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_3} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>HISTORY OF CONTAINERIZATION</h5>
              <p className="card-text">Since ancient time, every country was looking for new markets and hence International Trade occurred. Indians reached Arab, African and European countries and the same vice-versa found India for trading.PG Merchant's use to carry their goods by Ship.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/history-of-containerization.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "70px"}}>READ MORE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginTop: "60px"}}>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_4} className={styles.card_img} alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>WHY MARKING AND LABELING ARE IMPORTANT IN INTERNATIONAL TRADE</h5>
              <p className="card-text">Good Packaging protects your cargo and Good Labeling helps in safe handling till it reaches end user.Marking and Labeling is important part in Export and Import.Every package meant for export/import must be marked and labelled for correct identification. This Helps in handling cargo carefully.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/why-marking-and-labeling-areimportant.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "72px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_5} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>METHODS OF PAYMENT IN INTERNATIONAL TRADE</h5>
              <p className="card-text">In International Trade, It is very important to decide the mode of payment. There are mainly 5 method of Payment. During negotiation, Exporter and Importer should finalize this terms. Methods of Payment such as Cash in Advance, Letters of Credit, Documentary Collection that is D/P(Documents against Payment) and  D/A(Documents against Acceptance) and many more</p>
              <a href="https://truptigirkar.blogspot.com/2020/07/types-of-vessels.htmlhttps://truptigirkar.blogspot.com/2020/06/methods-of-payment-in-international.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "45px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_6} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>EXPORT PROMOTIONAL COUNCILS IN INDIA</h5>
              <p className="card-text">The basic objective of export promotion councils is to promote and develop the exports of the country. Each Council is responsible for the promotion of a particular group of products, projects and services.The major functions of the EPCs are To provide commercially useful information and assistance to theirmembers in developing and increasing their exports, To offer professional advice to their members in different areas</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/export-promotional-councils-in-india.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "20px"}}>READ MORE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginTop: "60px"}}>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_7} className={styles.card_img} alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>IMPORT PROCEDURE IN INDIA</h5>
              <p className="card-text">After Globalization, in 1991 India opened the door for International Trade.In initiallevel, Import procedure was completely manual and All the Importers and CB (CHA) were filling documents manually.They used to type the Bill of Entry on typewriter and then proceed with clearance</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/import-procedure-in-india.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "24px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_8} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>HOW TO CALCULATE AIR VOLUME?</h5>
              <p className="card-text">Aircraft has limited storage with specific weight capacity. Due to narrow body with Oval shape, airline uses special devise (ULD) to load cargo. A unit load device (*ULD*) is a pallet or container used to load luggage, freight, and mail on wide-body aircraft and specific narrow-body aircraft.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/how-to-calculate-air-volume.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "24px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_9} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>SEA CARGO.. CBM CALCULATION</h5>
              <p className="card-text">SEA Mode transport is the most cost effective way in International Trade. Almost 90% of cargo is transported by sea. Containerized SEA transport is mainly divided in two parts FCL and LCL. What is FCL? FCL means FULL CONTAINER LOAD Shipper or Exporter will book complete container to load his cargo. That is one shipper one Container.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/sea-cargo-cbm-calculation.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{marginTop: "60px", marginLeft: "150px"}}>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_10} className={styles.card_img} alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>MONSOON.. CARGO SAFETY PRECAUTION</h5>
              <p className="card-text">Its June Month and Monsoon is arriving, it is arriving in his own style.. with rain, Storm and Lightening.. During Period from June to September it is always observed that Logistics industry is badly affected by this weather changes as there are chances of late vessel berthing, late transport, Congestion and Cargo getting damaged etc etc.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/monsoon-cargo-safety-precaution.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{width: "23rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
            <Image src={blog_11} className={styles.card_img}  alt="..."/>
            <div className="card-body">
              <h5 className="card-title" style={{marginBottom:"20px"}}>THE SAFETY OF THE CARGO,...AN INCREASING CONCERN…</h5>
              <p className="card-text">One of the most important aspects of shipping which is often overlooked by “landlubbers” is that of stability of loads. CARGO safety becomes more complex endeavor due to LARGE SHIPS, HIGHER Container Stacking, Flexible Bridges & Increase in Stacking Weights on containers.</p>
              <a href="https://truptigirkar.blogspot.com/2020/06/lashing-and-securing.html" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", marginTop: "20px"}}>READ MORE</a>
            </div>
          </div>
        </div>
      </div>



    </div>
    </React.Fragment>   



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
};

export default knowledge;
