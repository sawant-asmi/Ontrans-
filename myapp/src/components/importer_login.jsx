import React, { Component } from 'react';
import { Navbar, Nav, Button, Image, Form, Modal } from 'react-bootstrap';
import axios from 'axios'; 
import styles from './importer_login.module.css';
import loginbg from './asserts/loginbg.png';
import loginimp from './asserts/loginimp.png';
import username from './asserts/username.png';
import password from './asserts/password.png';
import logo from './asserts/logo.png';
import Whatsapp from './whatsapp';

class ImporterLogin extends Component {

  state = {
    passwordVisible: false,
    showModal: false,
    resetEmail: '',
    newPassword: '',
    confirmPassword: '',
    errorMessage: '',
  };

  togglePasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible });
  };

  handleLogin = async (event) => {
    event.preventDefault();

    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;

    try {
      const response = await axios.post('http://localhost:5000/api/login/client', {
        emailid,
        password
      });

      console.log('Response:', response.data);
      if (response.status === 200) {
        sessionStorage.setItem('loggedInEmail', emailid);
        const username = emailid.split('@')[0];
        window.location.href = `/client_dashboard/profile?username=${username}`;
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid emailid or password');
    }
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, errorMessage: '' });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlePasswordReset = async (event) => {
    event.preventDefault();
    const { resetEmail, newPassword, confirmPassword } = this.state;
  
    if (newPassword !== confirmPassword) {
      this.setState({ errorMessage: 'Passwords do not match' });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/reset_password', {
        email: resetEmail,
        newPassword,
      });
  
      if (response.status === 200) {
        alert('Password updated successfully');
        this.handleCloseModal();
      } else {
        this.setState({ errorMessage: response.data.message });
      }
    } catch (error) {
      console.error('Password reset error:', error.response ? error.response.data.message : error.message);
      this.setState({ errorMessage: 'Failed to reset password. Please check your email Id and try Again.' });
    }
  };
  

  render() {
    const { passwordVisible, showModal, resetEmail, newPassword, confirmPassword, errorMessage } = this.state;

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
            <span style={{fontWeight: "700", fontSize: "35px"}}>LOGIN</span>
            <span style={{fontSize: "28px", fontWeight: "600", float: "right", marginRight: "100px"}}> Please Login To Your Importer/Exporter Account !</span>
            <div>
              <Image src={loginimp} className="card-img-top" alt="..." style={{width:"300px", height:"300px", marginTop:"150px", marginLeft:"-20px"}}/>
  
              <Form onSubmit={this.handleLogin}>
                <div style={{marginTop:"-350px", marginLeft:"236px"}}>

                  <div className="input-group" style={{width:"500px", height:"60px",marginLeft:"300px", marginBottom:"35px"}}>
                    <span className="input-group-text" id="basic-addon1">
                      <Image src={username} alt="Image Description" fluid style={{width:"20px", height:"20px"}}/>
                    </span>
                    <Form.Group>
                      <Form.Control type="text" id="emailid" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{width:"450px", height:"60px"}}/>
                    </Form.Group>
                  </div>

                  <div className="input-group" style={{width:"500px", height:"60px",marginLeft:"300px"}}>
                    <span className="input-group-text" id="basic-addon1">
                      <Image src={password} alt="Image Description" fluid style={{width:"20px", height:"20px"}}/>
                    </span>
                    <Form.Group style={{ position: 'relative', width: '450px' }}>
                      <Form.Control 
                        type={passwordVisible ? "text" : "password"} 
                        id="password" 
                        className="form-control" 
                        placeholder="Password" 
                        aria-label="Password" 
                        aria-describedby="basic-addon1" 
                        style={{width:"450px", height:"60px"}}
                      />
                      <span 
                        className={styles.toggle_password}
                        onClick={this.togglePasswordVisibility}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          cursor: 'pointer',
                          fontSize: '24px'
                        }}
                      >
                        {passwordVisible ? '🙈' : '👁️'}
                      </span>
                    </Form.Group>
                  </div>

                  <Button type="submit" variant="outline-primary" className={styles.login}>LOGIN</Button>
                  <h5 
                    style={{float:"right", marginTop:"60px", marginRight:"130px", color:"#ef7e3d", cursor: 'pointer'}}
                    onClick={this.handleShowModal}
                  >
                    Forgot Password?
                  </h5>
                </div>
  
              </Form>
              <div style={{marginTop:"40px"}}>
                <span style={{fontSize: "28px", fontWeight: "600", marginLeft:"525px", marginRight:"90px"}}>You don't have an account?</span>
                <h4 onClick={() => window.location.href = '/register'} style={{float:"right", marginRight:"130px", color:"#000080", fontWeight:"600", fontSize:"25px", marginTop:"-35px", cursor:"pointer"}}>Sign Up</h4>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handlePasswordReset}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="resetEmail"
                  value={resetEmail}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>

              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ImporterLogin;
