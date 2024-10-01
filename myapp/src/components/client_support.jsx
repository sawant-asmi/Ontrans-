import React from 'react';
import styles from './client_support.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import support_img from './asserts/support.png';
import { Image, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';


class ClientSupport extends React.Component {
    loggedInEmail = sessionStorage.getItem('loggedInEmail');
    loggedInName = this.loggedInEmail ? this.loggedInEmail.split('@')[0] : '';

    handleProfileClick = () => {
      // Redirect to profile page
      const username = this.loggedInName; // Using username extracted from email
  const profileURL = `/client_dashboard/profile?username=${username}`;
  window.location.href = profileURL;
  };
  handleOrdersClick = () => {
      // Redirect to profile page
      const username = this.loggedInName;
      const ordersURL = `/client_dashboard/orders?username=${username}`;
  window.location.href = ordersURL;
  };
  handlePlaceOrdersClick = () => {
    // Redirect to profile page
    const username = this.loggedInName;
    const placeordersURL = `/client_dashboard/place_orders?username=${username}`;
window.location.href = placeordersURL;
};
  handleEnquiryClick = () => {
      // Redirect to profile page
      const username = this.loggedInName;
      const enquiryURL = `/client_dashboard/enquiry?username=${username}`;
  window.location.href = enquiryURL;
  };
  handleSupportClick = () => {
      // Redirect to profile page
      const username = this.loggedInName;
      const supportURL = `/client_dashboard/support?username=${username}`;
      window.location.href = supportURL;
  };
  handleKnowledgeClick = () => {
      // Redirect to profile page
      const username = this.loggedInName;
      const knowledgeURL = `/client_dashboard/knowledge?username=${username}`;
      window.location.href = knowledgeURL; 
  };
    
    handleLogout = () => {
        // Clear session storage or any other stored login information
        sessionStorage.removeItem('loggedInEmail');
        // Redirect to login page or any other appropriate page
        window.location.href = '/login';
    };

    constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          message: '',
        };
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const isLoggedIn = sessionStorage.getItem('loggedInEmail');
        
        if (!isLoggedIn) {
          // User is not logged in, display alert
          alert('Please log in to submit.');
          window.location.href = '/login';
        }
        try {

          const response = await fetch('http://localhost:5000/api/client_contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
          })
          window.location.reload(true);
    
          if (response.ok) {
            // Handle success
            console.log('Contact saved successfully');
          } else {
            // Handle error
            console.error('Failed to save contact');
          }
        } catch (error) {
          console.error(error);
        }
      };

    
      render() {

    return (
        <>
        <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="profileTooltip">{this.loggedInName}</Tooltip>}
            >
                <div
                    className="position-fixed top-0 end-0 m-3"
                    style={{ cursor: 'pointer', zIndex: '1000', color: "#ef7e3d"}} // Ensure the icon is above other elements
                    onClick={this.handleProfileClick}
                >
                    <i className="bi bi-person-circle" style={{ fontSize: '45px' }}></i>
                </div>
            </OverlayTrigger>

            <div className={styles.sidebar}>
        <div className='container-fluid position-fixed'>
            <div className='row'>
                <div className={[styles.bg_custom, 'col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column'].join(' ')}>
                    <div>
                        <a className='text-decoration-none text-white d-flex align-itemcenter ms-3 mt-2'>
                            <span className='ms-1 fs-2 fw-bold'>Ontrans</span>
                        </a>
                        <hr className={styles.line}/>
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handleProfileClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-person'></i>
                                    <span className='ms-2'>Profile</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handleOrdersClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-table'></i>
                                    <span className='ms-2'>Orders</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handlePlaceOrdersClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-table'></i>
                                    <span className='ms-2'>Place Order</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handleEnquiryClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-person-lines-fill'></i>
                                    <span className='ms-2'>Get a Quote</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handleSupportClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-people-fill'></i>
                                    <span className='ms-2'>Support</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={this.handleKnowledgeClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-info-circle'></i>
                                    <span className='ms-2'>Knowledge</span>
                                </a>
                            </li>
                        </ul>

                        <div  style={{marginTop:"208px"}}>
                        <ul class="nav nav-pills flex-column">
                        <li class="nav-item text-white fs-4 my-1 mb-3">
                                <a class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-power'></i>
                                    <Button onClick={this.handleLogout} className='ms-1 fs-5' style={{ backgroundColor : "#ea7d3e", border: "none", marginBottom: "5px"}}>LOG OUT</Button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
                
            </div>

            
            
        </div>
        </div>
        <div className={styles.content}>
                    <div className={styles.scrollableContent}>
                    <div style={{textAlign:"center",  marginBottom: "20px"}}>
                          <h1 style={{textAlign:"center", color:"#ef7e3d", display:"inline-block"}}>SUPPORT</h1>
                          <Image src={support_img} alt="Support" style={{display:"inline-block", height:"100px", width:"100px", marginLeft:"20px", marginTop:"-20px"}}/>
                        </div>
                <Form onSubmit={this.handleSubmit}>
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
                    </div>
                </div>
        
        </>
    );
};
}

export default ClientSupport;
