import React, { createRef } from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './contact.module.css';
import contact_main from './asserts/contact_main.png';
import contact1 from './asserts/contact1.png';
import contact2 from './asserts/contact2.png';
import contact3 from './asserts/contact3.png';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import emailjs from '@emailjs/browser';
import Whatsapp from './whatsapp';



class contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      message: '',
    };
    this.form = createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        // Contact saved successfully, now send the email
        emailjs.sendForm('service_a3vd6tp', 'template_44p4ju9', this.form.current, 'rlA7MCxQUi9FqwLIY')
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              window.location.reload(true); // Reload page only after email is sent
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );

        console.log('Contact saved successfully');
      } else {
        console.error('Failed to save contact');
      }
    } catch (error) {
      console.error(error);
    }
  };


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
          <Nav.Link href="/contact" style={{color: '#F46210',paddingRight: '30px' }}>Contact Us</Nav.Link>
          <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>

    <div className={styles.container}>
      <Image src={contact_main} alt="Image Description" fluid className={styles.contact_main} />
      <div className={styles.centered}>
        <span className={styles.imgtext}>Contact Us</span>
        <span className={styles.imgtext}>Always Best Worldwide Shipping</span>
      </div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>GET IN TOUCH</span>
    </div>

    <div className={styles.text}>
      <span>Any Questions? Contact us on - </span>
    </div>

    <div style={
      {marginBottom: "110px"}
    }>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact1} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>PHONE</span>
    <span className={styles.con_text2} style={{marginLeft: "-70px"}}>+91 89760 71984</span>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact2} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>EMAIL</span>
    <span className={styles.con_text2} style={{marginLeft: "-56px"}}>support@gstlogistics.co.in</span>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <div class="card-body" style={{boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", display: "flex"}}>
  <Image src={contact3} alt="Image Description" fluid style={{float: 'left'}}/>
    <span className={styles.con_text1}>ADDRESS</span>
    <span className={styles.con_text2} style={{marginLeft: "-85px"}}>Ganesh Tower, Thane</span>
  </div>
</div>
    </div>
  </div>
</div>
    </div>

    <div className={styles.tag}>
      <span className={styles.tag_text}>NEED ANY HELP?</span>
    </div>

    <div className={styles.text}>
      <span>Send us a Message</span>
    </div>


    <Form ref={this.form} onSubmit={this.handleSubmit}>
    <div style={{marginBottom: "50px"}}>
    <div class="container text-center">
  <div class="row">
    <div class="col">

      <div class="container text-center">
  <div class="row" style={{marginBottom: "30px", marginTop: "60px"}}>
    <div class="col">
    <Form.Group controlId="firstname"> 
          <Form.Control value={this.state.firstname}
            onChange={this.handleChange} id="firstname" name="firstname" type="text" placeholder= "First Name" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="lastname"> 
          <Form.Control value={this.state.lastname}
            onChange={this.handleChange} id="lastname" name="lastname"  type="text" placeholder= "Last Name" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

  <div class="row" style={{marginBottom: "30px"}}>
    <div class="col">
    <Form.Group controlId="phone"> 
          <Form.Control value={this.state.phone}
            onChange={this.handleChange} id="phone" name="phone"  type="number" placeholder= "Phone" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="email"> 
          <Form.Control value={this.state.email}
            onChange={this.handleChange} id="email" name="email"  type="text" placeholder= "Email Address" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

  <div class="row" style={{marginBottom: "30px"}}>
    <div class="col">
    <Form.Group controlId="message"> 
          <Form.Control value={this.state.message}
            onChange={this.handleChange} id="message" name="message"  as="textarea" rows={5}  placeholder= "Message" style={{ borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
  </div>

</div>
<Button type="submit" style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", float: "left", marginLeft: "15px"}}>SEND MESSAGE</Button>
    </div>


    <div class="col">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1295109206667!2d72.97234347490317!3d19.18954488203856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92128db8cf9%3A0x3030cc7cbdd687f2!2sGST%20Logistics!5e0!3m2!1sen!2sin!4v1699339129645!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">maps</iframe>
    </div>
  </div>
</div>
    </div>

    </Form>

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

export default contact;

