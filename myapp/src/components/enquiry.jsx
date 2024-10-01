import React, { createRef } from 'react';
import { Navbar, Nav, Button, Image, Form } from 'react-bootstrap';
import styles from './enquiry.module.css';
import footer_call from './asserts/footer_call.png';
import footer_mail from './asserts/footer_mail.png';
import footer_address from './asserts/footer_address.png';
import footer_instagram from './asserts/footer_instagram.png';
import logo from './asserts/logo.png';
import emailjs from '@emailjs/browser';
import Whatsapp from './whatsapp';

class enquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      loadport: '',
      dischargeport: '',
      incoterms: '',
      packages: '',
      typeofpackage: '',
      length: '',
      width: '',
      height: '',
      units: 'cm',
      freighttype: '',
      loadtype: '',
    };
    this.form = createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  

  handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });
  
      if (response.ok) {   
        emailjs.sendForm('service_uyc18ql', 'template_m0ygsm2', this.form.current, 'rlA7MCxQUi9FqwLIY')
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
              alert('We have received your enquiry. You will receive the quotation shortly.');
              window.location.reload(true); // Reload page only after email is sent
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );  
        console.log('Enquiry saved successfully.');
      } else {
        console.error('Failed to save Enquiry');
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
          <Nav.Link href="/contact" style={{color: '#000000',paddingRight: '30px' }}>Contact Us</Nav.Link>
          <Nav.Link href="/knowledge" style={{color: '#000000',paddingRight: '30px' }}>Knowledge Base</Nav.Link>
        </Nav>
        <Button href="/login" variant="outline-primary" className={styles.nav_login}>Login</Button>
      </Navbar.Collapse>
    </Navbar>
    </header>
<div className={styles.explore}>
      <p>Get an Enquiry</p>
    </div>
    <Form ref={this.form} onSubmit={this.handleSubmit} >
    <div className={styles.help}>
    <div class="container text-center" style={{marginBottom: "70px"}}>

  <div class="row" style={{marginBottom: "40px"}}>
  <span className={styles.tag_text}>PERSONAL DATA </span>
    <div class="col">
    <Form.Group controlId="firstname"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>FIRST NAME:</Form.Label> 
          <Form.Control value={this.state.firstname}
            onChange={this.handleChange} id="firstname" name="firstname" type="text" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="lastname"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>LAST NAME:</Form.Label> 
          <Form.Control value={this.state.lastname}
            onChange={this.handleChange} id="lastname" name="lastname" type="text" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="phone"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>PHONE NUMBER:</Form.Label> 
          <Form.Control value={this.state.phone}
            onChange={this.handleChange} id="phone" name="phone" type="number" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    
    </div>
    <div class="col">
    <Form.Group controlId="email"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>EMAIL ID:</Form.Label> 
          <Form.Control value={this.state.email}
            onChange={this.handleChange} id="email" name="email" type="email" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    
    </div>
    <div class="col">
    <Form.Group controlId="companyname"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>COMPANY NAME:</Form.Label> 
          <Form.Control value={this.state.companyname}
            onChange={this.handleChange} id="companyname" name="companyname" type="companyname" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    
    </div>
  </div>

  <div class="row" style={{marginBottom: "40px"}}>
  <span className={styles.tag_text}>SHIPMENT DATA </span>
    <div class="col">
    <Form.Group controlId="loadport"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>LOAD PORT:</Form.Label> 
          <Form.Control value={this.state.loadport}
            onChange={this.handleChange} id="loadport" name="loadport" type="text" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="dischargeport"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>DISCHARGE PORT:</Form.Label> 
          <Form.Control value={this.state.dischargeport}
            onChange={this.handleChange} id="dischargeport" name="dischargeport" type="text" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="incoterms"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>INCOTERMS:</Form.Label> 
          <Form.Select value={this.state.incoterms}
            onChange={this.handleChange} id="incoterms" name="incoterms" style={{borderColor: "#F58343", borderWidth: "2px"}}><option>Open this select menu</option>
      <option value="EXW">EXW</option>
      <option value="Till destination port">Till destination port</option>
      <option value="door delivery">door delivery</option></Form.Select>
    </Form.Group> 
      
    </div>
  </div>

  <div class="row" style={{marginBottom: "40px"}}>
    <div class="col">
    <Form.Group controlId="packages"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>NUMBER OF PACKAGES:</Form.Label> 
          <Form.Control value={this.state.packages}
            onChange={this.handleChange} id="packages" name="packages" type="number" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="typeofpackage"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>TYPE OF PACKAGE:</Form.Label> 
          <Form.Select value={this.state.typeofpackage}
            onChange={this.handleChange} id="typeofpackage" name="typeofpackage" style={{borderColor: "#F58343", borderWidth: "2px"}}><option>Open this select menu</option>
      <option value="Box">Box</option>
      <option value="Drum">Drum</option>
      <option value="Cartoons">Cartoons</option>
      <option value="Cans">Cans</option>
      <option value="Bundles">Bundles</option>
      </Form.Select>
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="length"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>LENGTH:</Form.Label> 
          <Form.Control value={this.state.length}
            onChange={this.handleChange} id="length" name="length" type="number" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="width"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>WIDTH:</Form.Label> 
          <Form.Control value={this.state.width}
            onChange={this.handleChange} id="width" name="width" type="number" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="height"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>HEIGHT:</Form.Label> 
          <Form.Control value={this.state.height}
            onChange={this.handleChange} id="height" name="height" type="number" style={{borderColor: "#F58343", borderWidth: "2px"}}/> 
        </Form.Group> 
    </div>
    <div class="col">
    <Form.Group controlId="units"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>UNITS:</Form.Label> 
          <Form.Select value={this.state.units}
            onChange={this.handleChange} id="units" name="units" style={{borderColor: "#F58343", borderWidth: "2px"}}><option>Open this select menu</option>
      <option value="cm">cm</option>
      <option value="mm">mm</option>
      <option value="m">m</option>
      <option value="inch">inch</option>
      <option value="feet">feet</option>
      </Form.Select>
        </Form.Group> 
    </div>
  </div>

  <div class="row" style={{marginBottom: "40px"}}>
    <div class="col">
    <Form.Group controlId="freighttype"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>Freight Type:</Form.Label> 
          <Form.Check checked={this.state.freighttype === 'air'}
            onChange={this.handleChange} id="freightair" value= "air" type='radio' name="freighttype" inline label="Air Transportation"  style={{float: "left", marginLeft: "40px"}}/>
          <Form.Check checked={this.state.freighttype === 'sea'}
            onChange={this.handleChange} id="freightsea" value= "sea" type='radio' name="freighttype" inline label="Sea Transportation"  style={{float: "left"}}/>
      
        </Form.Group> 
    
    </div>
    <div class="col">
    <Form.Group controlId="loadtype"> 
          <Form.Label style={{fontWeight: "600", float: "left"}}>Load Type:</Form.Label> 
          <Form.Check checked={this.state.loadtype === 'lcl'}
            onChange={this.handleChange} id="loadtypelcl" value= "lcl" name="loadtype" type='radio' inline label="LCL"  style={{float: "left", marginLeft: "40px"}}/>
          <Form.Check checked={this.state.loadtype === 'fcl'}
            onChange={this.handleChange} id="loadtypefcl" value= "fcl" name="loadtype" type='radio' inline label="FCL" aria-label="option 1" style={{float: "left"}}/>
      
        </Form.Group> 
    
    </div>
    </div>
    <Button className="btn btn-primary" type='submit' style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", float: "left"}}>GET AN ENQUIRY</Button>
    
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

export default enquiry;

