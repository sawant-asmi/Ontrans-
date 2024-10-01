import React from 'react';
import { Navbar, Nav, Button, Image, Form, Modal } from 'react-bootstrap';
import styles from './client_reg.module.css';
import registerbg from './asserts/registerbg.png';
import imp from './asserts/imp.png';
import logo from './asserts/logo.png';



class client_reg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: '',
      panid: '',
      gstno: '',
      iecno: '',
      emailid: '',
      phone: '',
      contactpersonname: '',
      contactpersonphone: '',
      password: '',
      retypePassword: '',
      firstTime: '',
      username: '',
      showPopup: false,
      showPopupf: false,
      showPopupv: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // Update the username when emailid changes
    if (name === 'emailid') {
      const username = value; // Assuming a basic username from email
      this.setState({ [name]: value, username });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleFirstTimeChange = (e) => {
    this.setState({ firstTime: e.target.value });
  };

  handleClosePopup = () => {
    // Close the warning popup and clear password fields
    this.setState({ showPopup: false, password: '', retypePassword: '' });
  };
  handleClosePopupf = () => {
    // Close the warning popup and clear password fields
    this.setState({ showPopupf: false });
  };
  handleClosePopupv = () => {
    // Close the warning popup and clear password fields
    this.setState({ showPopupv: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = this.validateFields();

    if (validationError) {
      // Show a warning popup if there is a validation error
      this.setState({ showPopupv: true, validationError });
      return;
    }

    const isEmptyField = Object.values(this.state).some(value => value === '');

    if (isEmptyField) {
      // Show a warning popup if any field is empty
      this.setState({ showPopupf: true });
      return;
    }

    const { password, retypePassword } = this.state;

    if (password !== retypePassword) {
      // Show a warning popup if passwords don't match
      this.setState({ showPopup: true });
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      })
      window.location.reload(true);

      if (response.ok) {
        // Handle success
        console.log('Client saved successfully');
        this.setState({ password: '', retypePassword: '' });
      } else {
        // Handle error
        console.error('Failed to save client');
      }
    } catch (error) {
      console.error(error);
    }
  };
  validateFields = () => {
    const { emailid, phone } = this.state;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailid)) {
      return 'Invalid email format';
    }

    // Validate phone contains only numbers
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      return 'Phone must contain only numbers';
    }

    // Add more validation rules for other fields as needed

    return null; // No validation error
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const companyname = event.target.companyname.value;
  //   const panid = event.target.panid.value;
  //   const gstno = event.target.gstno.value;
  //   const iecno = event.target.iecno.value;
  //   const emailid = event.target.emailid.value;
  //   const phone = event.target.phone.value;
  //   const contactpersonname = event.target.contactpersonname.value;
  //   const contactpersonphone = event.target.contactpersonphone.value;
  //   const password = event.target.password.value;
  //   const firsttime = event.target.firsttime.value;

  //   try {
  //     const response = await axios.post('/api/register/client', { companyname, panid, gstno, iecno, emailid, phone, contactpersonname, contactpersonphone, password, firsttime });
  //     console.log(response.data);
  //     window.location.reload(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  render() {
    return (
      <>
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

<div className={styles.block}>
<Image src={registerbg} alt="Image Description" fluid className={styles.logimg}/>
<div>
<Image src={imp} alt="Image Description" fluid className={styles.regimg}/>
</div>


<div className={styles.logdiv} >


<Form onSubmit={this.handleSubmit}>



<Form.Group > 
  <Form.Label style={{color:"#f3894c", fontSize: "40px", fontWeight: "600", textAlign: "center", display:"block", marginBottom:"40px"}}>Register Here</Form.Label><br/>
</Form.Group>  

<Form.Group controlId="companyname" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Company Name</Form.Label>
  <Form.Control value={this.state.companyname}
            onChange={this.handleChange} id="companyname" name="companyname" type="text" placeholder= "Enter Company Name" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="panid" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Pan ID</Form.Label>
  <Form.Control value={this.state.panid}
            onChange={this.handleChange} id="panid" name="panid" type="text" placeholder= "Enter Pan ID" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="gstno" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>GST No.</Form.Label>
  <Form.Control value={this.state.gstno}
            onChange={this.handleChange} id="gstno" name="gstno" type="text" placeholder= "Enter GST No." style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="iecno" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>IEC No.</Form.Label>
  <Form.Control value={this.state.iecno}
            onChange={this.handleChange} id="iecno" name="iecno" type="text" placeholder= "Enter IEC No." style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="emailid" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Email ID</Form.Label>
  <Form.Control value={this.state.emailid}
            onChange={this.handleChange} id="emailid" name="emailid" type="text" placeholder= "Enter Email ID" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="phone" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Mobile Number</Form.Label>
  <Form.Control value={this.state.phone}
            onChange={this.handleChange} id="phone" name="phone" type="text" placeholder= "Enter Mobile Number" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group controlId="contactpersonname" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Contact Person Name</Form.Label>
  <Form.Control value={this.state.contactpersonname}
            onChange={this.handleChange} id="contactpersonname" name="contactpersonname" type="text" placeholder= "Contact Person Name" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group controlId="contactpersonphone" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Contact Person Number</Form.Label>
  <Form.Control value={this.state.contactpersonphone}
            onChange={this.handleChange} id="contactpersonphone" name="contactpersonphone" type="text" placeholder= "Contact Person Number" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group controlId="username" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Username</Form.Label>
  <Form.Control name="username"
            value={this.state.username}
            readOnly type="text" placeholder= "Enter Username" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="password" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Password</Form.Label>
  <Form.Control value={this.state.password}
            onChange={this.handleChange} id="password" name="password" type="password" placeholder= "Enter Password" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group> 

<Form.Group controlId="retypePassword" style={{marginBottom:"30px"}}> 
  <Form.Label style={{fontSize: "18px", fontWeight: "500"}}>Re-enter Password</Form.Label>
  <Form.Control name="retypePassword"
              value={this.state.retypePassword}
              onChange={this.handleChange} type="password" placeholder= "Re-enter Password" style={{width:"780px", height:"45px", borderRadius:"15px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}/> 
</Form.Group>

<Form.Group controlId="firstTime"> 
  <Form.Label style={{fontWeight: "500", fontSize:"18px", float:"left", marginRight:"60px", marginTop:"5px"}}>First Time As A Exporter/Importer</Form.Label> 
  <Form.Select value={this.state.firstTime}
            onChange={this.handleFirstTimeChange} name="firsttime" style={{width:"150px", borderRadius:"30px", marginTop:"50px", height:"40px", boxShadow: "0px 3px 5px 0px rgba(0, 0, 0, 0.5)"}}><option>Select</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
    </Form.Select>
</Form.Group>

<Button type='submit' className={styles.signup}>Sign Up</Button>
<div style={{marginTop:"30px"}}>
  <span style={{fontSize: "20px", fontWeight: "400", color:"#f3894c", marginLeft:"237px"}}>Already Have An Account ?</span>
  <h4 onClick={() => window.location.href = '/login/importer-exporter'} style={{float:"right", color:"#000080", fontWeight:"400", fontSize:"20px", marginTop:"3px", cursor:"pointer", marginRight:"243px"}}>Sign In</h4>
</div>

</Form>

{/* Warning Popup */}
<Modal show={this.state.showPopup} onHide={this.handleClosePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Password Mismatch</Modal.Title>
          </Modal.Header>
          <Modal.Body>Passwords do not match. Please re-enter your password.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosePopup}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

{/* Warning Popup */}
<Modal show={this.state.showPopupf} onHide={this.handleClosePopupf}>
          <Modal.Header closeButton>
            <Modal.Title>Empty Fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please fill in all fields before submitting the form.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosePopupf}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

{/* Warning Popup */}
        <Modal show={this.state.showPopupv} onHide={this.handleClosePopupv}>
          <Modal.Header closeButton>
            <Modal.Title>Validation Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.validationError}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClosePopupv}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


  

 
    
  




 
</div>

</div>

      </>
    )
}}

export default client_reg;