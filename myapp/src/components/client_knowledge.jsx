import React from 'react';
import styles from './client_knowledge.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import knowledge from './asserts/knowledge.png';
import { Image, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import incoterms from './asserts/incoterms.png';

class ClientKnowledge extends React.Component {
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
                          <h1 style={{textAlign:"center", color:"#ef7e3d", display:"inline-block"}}>KNOWLEDGE</h1>
                          <Image src={knowledge} alt="Support" style={{display:"inline-block", height:"100px", width:"100px", marginLeft:"20px", marginTop:"-20px"}}/>
                        </div>
<div>
  <Image src={incoterms} alt="Image Description" fluid style={{marginBottom: "90px", marginLeft:"30px"}}/>
</div>
                    </div>
                </div>
        
        </>
    );
};
}

export default ClientKnowledge;
