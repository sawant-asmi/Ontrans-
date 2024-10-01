import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import styles from './about.module.css';
import about_main from './asserts/about_main.png';
import profile_1 from './asserts/Profile_1.png';
import profile_2 from './asserts/profile_2.png';
import logo from './asserts/logo.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import Whatsapp from './whatsapp';

const about = () => {
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
          <Nav.Link href="/about" style={{color: '#F46210',paddingRight: '30px' }}>About Us</Nav.Link>
          <Nav.Link href="/services" style={{color: '#000000',paddingRight: '30px' }}>Services</Nav.Link>
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
          <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
    <div className={styles.container}>
      <Image src={about_main} alt="Image Description" fluid className={styles.about_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>About Us</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR DIRECTORS</span>
    </div>

    <div style={{ marginTop: "60px" }}>
  <div className="container text-center">
    <div className="row" style={{ marginBottom: "50px", alignItems: "center" }}>
      <div className="col">
        <div className="card" style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)" }}>
          <div className="card-body">
            <div className="row" style={{alignItems: "center" }}>
              <div className="col-4" style={{ flex: "0 0 30%", maxWidth: "30%" }}>
                <img src={profile_1} className="card-img-top" alt="..." style={{ padding: "0px 70px", paddingTop: "20px", marginBottom:"20px"}} />
                <h5 className="card-title" style={{ fontWeight: "700" }}>Sunit Girkar</h5>
              </div>
              <div className="col-8" style={{ flex: "0 0 70%", maxWidth: "70%" }}>
              <h3 style={{ color: "#F46210", textAlign:"left", marginBottom:"20px"}}>Director</h3>
                <p className="card-text" style={{ color: "#6161B5", textAlign: "justify" }}>
                  <strong>With over 28 years of experience in air and sea operations, Mr. Sunit Girkar has established himself as a highly skilled logistics professional and the dynamic leader and founder of GST Logistics Pvt Ltd.  His expertise goes beyond mere operations, excelling not only in managing shipments but also in leveraging his exceptional networking skills to build a vast global network of agents. This extensive network ensures efficient and reliable deliveries worldwide, showcasing his mastery in global logistics.
                  <br /><br />
                  His strength lies in his ability to connect and enhance customers' businesses. He builds bridges, not just routes, and is renowned as the industry's go-to troubleshooter. His proactive problem-solving approach and innovative mindset drive him to find effective solutions to logistical challenges, making him an invaluable asset to any organization. Innovation is his middle name, and his constant drive to improve processes sets him apart in the logistics field.
                  <br /><br />
                  Under his leadership, GST Logistics Pvt Ltd has grown into  a comprehensive logistics service provider, delivering a wide range of solutions under one roof. This achievement is a testament to the hard work and dedication of Mr. Sunit Girkar and his team, who are committed to offering efficient and exceptional service to all their customers.
                  <br /><br />
                  As a trusted logistics leader, Sunit has played a key role in improving operations and fostering strong international partnerships. His dedication and expertise have earned him the trust and respect of the industry. To further enhance his profile, consider adding visuals: a globe to represent his global network, a handshake to symbolize his ability to build bridges and partnerships, and a lightbulb to illustrate his innovative problem-solving skills.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row" style={{ marginBottom: "50px", alignItems: "center" }}>
      <div className="col">
        <div className="card" style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.2)" }}>
          <div className="card-body">
            <div className="row" style={{alignItems: "center" }}>
              <div className="col-4" style={{ flex: "0 0 30%", maxWidth: "30%" }}>
                <img src={profile_2} className="card-img-top" alt="..." style={{ padding: "0px 70px", paddingTop: "20px", marginBottom:"20px"}} />
                <h5 className="card-title" style={{ fontWeight: "700" }}>Trupti Girkar</h5>
              </div>
              <div className="col-8" style={{ flex: "0 0 70%", maxWidth: "70%" }}>
              <h3 style={{ color: "#F46210", textAlign:"left", marginBottom:"20px"}}>Director</h3>
                <p className="card-text" style={{ color: "#6161B5", textAlign: "justify" }}>
                  <strong>She has been a dedicated professional in the shipping industry from the year 2006, specializing in handling special cargo such as out-of-gauge (OOG), break bulk, and hazardous materials. As a leading member of her team, she has played a pivotal role in designing the company's software programs, which are integrated with overseas offices and counterparts in Asia, Europe, and the United States.
                  <br /><br />
                  Leveraging her extensive knowledge and experience, she has recently ventured into the logistics market with the aim of enhancing customer experiences and supporting those aspiring to succeed in the international market. She holds a Diploma in Customs Clearance from Garware Institute.
                  <br /><br />
                  As the Managing Director of GST Logistics Pvt Ltd, she focuses on training and development, through the various training programs she leads on lashing and securing cargo. By spearheading these initiatives, she significantly contributes to the professional growth and skill enhancement of her colleagues and peers in the industry, promoting a culture of continuous improvement and excellence.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>


    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR COMPANY</span>
    </div>

    <div className={styles.about}>
    GST Logistics is an international logistics company specializing in supply chain management for exporters and importers. Our mission is to provide exceptional services that are Comprehensive, quality-driven, and timely. Our team of dedicated and experienced professionals offers tailor-made logistics solutions to meet your specific needs.<br/>
<br/>
At GST Logistics, we concentrate on serving customers with global sourcing and supply chain management requirements adding value through our innovative end-to-end international logistics programs. At GST, our core values include maintaining transparency, delivering timely services, and building strong customer relationships. Our foundation is built on teamwork and continuous innovation, ensuring we consistently meet and exceed our clients' expectations.

    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>OUR VISION & MISSION</span>
    </div>

    <div style={{display:"block", marginBottom:"50px"}}>
        <div className={styles.vision}>
          <p style={{fontWeight: "700", fontSize: "25px", textAlign: "right"}}>VISION</p>
          Our vision is to become the leading one-stop solution provider for international trade logistics. <br/>
        </div>
        <div className={styles.mission}>
          <p style={{fontWeight: "700", fontSize: "25px", textAlign: "left" }}>MISSION</p>
          <strong>To ensure efficient global trade solutions for clients by expertly handling the transportation of goods across international borders.</strong><br/>
        <br/>
        <br/>
        <strong>Seamless and Efficient:</strong> Our goal is to streamline the entire import/export process, minimizing stress and delays for clients.<br/>
        <br/>
        <strong>International Trade Solutions:</strong> We cater to companies and individuals involved in international trade.<br/>
        <br/>
        <strong>Expertly Managing Movement of Goods:</strong> We handle the logistics of transporting goods, including contracts with carriers, booking space, and ensuring proper documentation.<br/>
        <br/>
        <strong>Across Borders:</strong> Our services specifically focus on international movement of goods.<br/>
        <br/>
        <strong>Compliance with Regulations:</strong> We ensure all customs regulations and trade laws are adhered to for smooth clearance of goods.
        </div>

      
        <div className={styles.vision}>
          <p style={{fontWeight: "700", fontSize: "25px", textAlign: "right"}}>CORE VALUES</p>
          1. <strong>Transparency:</strong>"openness, communication, and accountability is our key approach” <br/>
          2. <strong>Teamwork:</strong> This core value highlights that combining diverse skills, perspectives, and a shared commitment is essential for success. It enhances both efficiency and productivity. <br/>
          3. <strong>Innovation:</strong> It drives us to continually seek new ideas and solutions to stay ahead in the industry. <br/>
          4. <strong>Happy Clients:</strong> “Your happiness is our success! We're here to help you, every step of the way.” <br/>
        </div>
        
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
              <p className={styles.footertext}>+91 22 2541 00 42</p>
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

export default about;