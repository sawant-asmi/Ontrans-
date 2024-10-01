import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './index.module.css';
import home_main from './asserts/home_main.png';
import home_service1 from './asserts/home_service1.png';
import home_service2 from './asserts/home_service2.png';
import home_card1 from './asserts/home_card1.png';
import home_card2 from './asserts/home_card2.png';
import home_card3 from './asserts/home_card3.png';
import home_aboutgst1 from './asserts/home_aboutgst1.png';
import home_aboutgst2 from './asserts/home_aboutgst2.png';
import home_aboutgst3 from './asserts/home_aboutgst3.png';
import home_num1 from './asserts/home_num1.png';
import home_num2 from './asserts/home_num2.png';
import home_num3 from './asserts/home_num3.png';
import home_num4 from './asserts/home_num4.png';
import home_vector1 from './asserts/home_vector1.png';
import home_test1 from './asserts/home_test1.png';
import home_test2 from './asserts/home_test2.png';
import home_video from './asserts/home_video.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';


const index = () => {
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
          <Nav.Link href="/" style={{color: '#F46210',paddingRight: '30px' }}>Home</Nav.Link>
          <Nav.Link href="/about" style={{color: '#000000',paddingRight: '30px' }}>About Us</Nav.Link>
          <Nav.Link href="/services" style={{color: '#000000',paddingRight: '30px' }}>Services</Nav.Link>
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
          <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button  href = "/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <div className={styles.container}>
      <Image src={home_main} alt="Image Description" fluid className={styles.home_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>Fast , Reliable and</span>
        <span className={styles.imgtext}>Affordable Shipping</span>
        <span className={styles.imgtext}>services for you </span>
        <Button  href = "/enquiry" variant="outline-primary" className={styles.quote}>Get an Enquiry</Button>
      </div>
    </div>
    <div className={styles.s_container}>
    <Image src={home_service1} alt="Image Description" fluid className={styles.home_service} onClick={() => window.location.href = '/services'} style={{ cursor: 'pointer' }}/>
    <Image src={home_service2} alt="Image Description" fluid className={styles.home_service} onClick={() => window.location.href = '/services'} style={{ cursor: 'pointer' }}/>
    </div>
    <div className={styles.explore}>
      <p>Explore our services</p>
    </div>
    <React.Fragment>
    <div className={styles.grid}>
      <div className="row">
        <div className="col"><div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
  <Image src={home_card1} className={styles.card_img} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Custom Clearance</h5>
    <p className="card-text">From specializing of shipment to freight forwarding and inland transportation</p>
    <a href="/custom_clearance" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
  </div>
</div></div>
        <div className="col"><div className="card" style={{width: "18rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
  <Image src={home_card2} className={styles.card_img}  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Freight Forwarding</h5>
    <p className="card-text">With no restriction in the size and weight of goods our advance solution& strong co-operation</p>
    <a href="/freight_forwarding" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
  </div>
</div></div>
        <div className="col"><div className="card" style={{width: "18rem", height: "29rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
  <Image src={home_card3} className={styles.card_img}  alt="..."/>
  <div className="card-body" style={{marginTop: "55px"}}>
    <h5 className="card-title">DGFT Consultancy</h5>
    <p className="card-text">business of export import consultancy offering our effective advisory and consulting services</p>
    <a href="/dgft_consultancy" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>
  </div>
</div></div>
      </div>
    </div>
    </React.Fragment>

    <div className={styles.explore}>
      <p>About GST Logistics</p>
    </div>

    <React.Fragment>
    <div className={styles.grid_about}>
      <div className="row">
        <div className="col"><div className="card" style={{width: "23rem"}}>
      <div className={styles.container_aboutgst}>
      <Image src={home_aboutgst1} className="card-img-top" alt="..."/>
      <div className={styles.home_aboutgst_img}>
        <span className={styles.imgtext_about_main}>Value</span>
        <span className={styles.imgtext_about_head}>GST Logistic Cargo</span>
        <span className={styles.imgtext_con}>Transparency </span>
        <span className={styles.imgtext_con}>Team Work </span>
        <span className={styles.imgtext_con}>Innovation </span>
        <span className={styles.imgtext_con}>Happy Clients </span>
        <a href="/about" className="btn btn-primary" style={{marginTop: "30px", backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>        
      </div>
      </div>
    </div></div>
        <div className="col"><div className="card" style={{width: "23rem"}}>
        <div className={styles.container_aboutgst}>
      <Image src={home_aboutgst2} className="card-img-top" alt="..."/>
      <div className={styles.home_aboutgst_img}>
        <span className={styles.imgtext_about_main}>Vision</span>
        <span className={styles.imgtext_about_head}>GST Logistic Vission</span>
        <span className={styles.imgtext_con}>To be customers obvious choice by providing total logistics solution through innovative and reliable service</span>
        <a href="/about" className="btn btn-primary" style={{marginTop: "60px", backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>        
      </div>
      </div>
    </div></div>
        <div className="col"><div className="card" style={{width: "23rem"}}>
        <div className={styles.container_aboutgst}>
      <Image src={home_aboutgst3} className="card-img-top" alt="..."/>
      <div className={styles.home_aboutgst_img}>
        <span className={styles.imgtext_about_main}>Mission</span>
        <span className={styles.imgtext_about_head}>GST Logistic Mission</span>
        <span className={styles.imgtext_con}>Think with clarity & courage. </span>
        <span className={styles.imgtext_con}>Act wisely & on time. </span>
        <span className={styles.imgtext_con}>Achieve goals with confidence. </span>
        <a href="/about" className="btn btn-primary" style={{marginTop: "69px", backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px"}}>READ MORE</a>        
      </div>
      </div>
    </div></div>
      </div>
    </div>    
    </React.Fragment>

    <div className={styles.num}>
      <div className={styles.num_div}>
      <Image src={home_num1} alt="Image Description" fluid/>
      <span className={styles.num_txt1}>3570+</span>
      <span className={styles.num_txt2}>Shipping Sent</span>
      </div>

      <div className={styles.num_div}>
      <Image src={home_num2} alt="Image Description" fluid/>
      <span className={styles.num_txt1}>8735+</span>
      <span className={styles.num_txt2}>Cargo Finished</span>
      </div>

      <div className={styles.num_div}>
      <Image src={home_num3} alt="Image Description" fluid/>
      <span className={styles.num_txt1}>9450+</span>
      <span className={styles.num_txt2}>Team Members</span>
      </div>

      <div className={styles.num_div}>
      <Image src={home_num4} alt="Image Description" fluid/>
      <span className={styles.num_txt1}>4150+</span>
      <span className={styles.num_txt2}>Miles Travelled</span>
      </div>
    </div>

    <div className={styles.explore}>
      <p>Testimonials</p>
    </div>
    <div className={styles.explore_home}>
      <p>What our clients say about us</p>
    </div>

    <React.Fragment>
    <div className={styles.grid_test}>
      <div className="row">
        <div className="col"><div className="card" style={{width: "25rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "3px"}}>
  <Image src={home_vector1} className={styles.vector_card_img} alt="..."/>
  <div className="card-body">
    <p className="card-text" style={{fontSize: "18px", fontStyle: "italic"}}>“We wanted to import goods from China and I must say Mr. Girkar and his team have excellent knowledge and experience in dealing with import/export shipment. Mr. Sunit Girkar handled our complete shipment from start to end and also performed custom goods clearing and transported the container from the custom warehouse directly to our factory”</p>
    <Image src={home_test1} alt="Image Description" fluid className={styles.home_test}/>
    <span className={styles.test_txt1}>Varun Anadkat</span>
    <span className={styles.test_txt2}>Engineer</span>
  </div>
</div></div>

<div className="col"><div className="card" style={{width: "25rem", boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderColor: "#F46210", borderWidth: "3px"}}>
  <Image src={home_vector1} className={styles.vector_card_img} alt="..."/>
  <div className="card-body">
    <p className="card-text" style={{fontSize: "18px", fontStyle: "italic", height: "11.6rem", marginTop: "30px"}}>“I would surely recommend Sunit to others as he is a great person to work with, brings expert knowledge, integrity, understands SMEs and offers quality work at an affordable price”</p>
    <Image src={home_test2} alt="Image Description" fluid className={styles.home_test}/>
    <span className={styles.test_txt1} >Gopalkrishna Dalmia</span>
    <span className={styles.test_txt2} >Hydro Mart (India)</span>
  </div>
</div></div>
        
        
      </div>
    </div>
    </React.Fragment>

    <div className={styles.video}>
    <Image src={home_video} className={styles.video_img} alt="Image Description" fluid onClick={() => window.location.href = 'https://www.youtube.com/watch?v=A-jJiJSUUpo'} style={{ cursor: 'pointer' }}/>
    <span className={styles.video_txt}>Watch Video Testimonials</span>
    <a href="https://www.youtube.com/watch?v=A-jJiJSUUpo" className="btn btn-primary" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "50px",  paddingRight: "50px",paddingTop: "10px",paddingBottom: "10px", marginLeft: "200px", marginBottom: "20px", fontSize: "20px"}}>Testimonial</a>
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
        <p style={{color: "white"}}>GST LOGISTICS | ALL RIGHTS RESERVED</p><br/>
      </div>
    </div>

    </>
  );
};

export default index;
