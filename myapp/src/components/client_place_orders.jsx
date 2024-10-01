import React from 'react';
import styles from './client_place_orders.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import orders_img from './asserts/orders.png';
import { Image, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

class ClientPlaceOrders extends React.Component {
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
          companyname: '',
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
      }
      
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        const isLoggedIn = sessionStorage.getItem('loggedInEmail');
        
        if (!isLoggedIn) {
          // User is not logged in, display alert
          alert('Please log in to submit the enquiry.');
          window.location.href = '/login';
        }
      
        try {
          const response = await fetch('http://localhost:5000/api/client_orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
          });
          window.location.reload(true);
      
          if (response.ok) {
            // Handle success
            console.log('Enquiry saved successfully');
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
                        <div style={{marginTop:"208px"}}>
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
                          <h1 style={{textAlign:"center", color:"#ef7e3d", display:"inline-block"}}>PLACE AN ORDER</h1>
                          <Image src={orders_img} alt="Support" style={{display:"inline-block", height:"100px", width:"100px", marginLeft:"20px", marginTop:"-20px"}}/>
                    </div>
                    <Form onSubmit={this.handleSubmit} >
    <div className={styles.help}>
      <div className="container text-center" style={{marginBottom: "70px"}}>
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
        <Button className="btn btn-primary" type='submit' style={{backgroundColor: "#F58343", border: "none", paddingLeft: "30px",  paddingRight: "30px", float: "left"}}>Place an Order</Button>
        
      </div>
    </div>
  </Form> 
                    </div>
                </div>
                

            
            
        
        
        </>
    );
};
}

export default ClientPlaceOrders;
