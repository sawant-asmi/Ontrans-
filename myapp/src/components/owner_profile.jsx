import React from 'react';
import styles from './owner_profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const OwnerProfile = () => {
    const loggedInEmail = sessionStorage.getItem('loggedInEmail');
    const loggedInName = loggedInEmail ? loggedInEmail.split('@')[0] : '';

    const handleProfileClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/profile'; 
    };
    const handleOrdersClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/orders'; 
    };
    const handleSupportClientClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/support_client'; 
    };
    
      const handleLogout = () => {
        // Clear session storage or any other stored login information
        sessionStorage.removeItem('loggedInEmail');
        // Redirect to login page or any other appropriate page
        window.location.href = '/login';
    };

    return (
        <>
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
                                <a onClick={handleProfileClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-person'></i>
                                    <span className='ms-2'>Profile</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={handleOrdersClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-table'></i>
                                    <span className='ms-2'>Orders</span>
                                </a>
                            </li>
                            <li class="nav-item text-white fs-4 my-1">
                                <a onClick={handleSupportClientClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-people-fill'></i>
                                    <span className='ms-2'>Client Support</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="nav nav-pills flex-column">
                        <li class="nav-item text-white fs-4 my-1 mb-3">
                                <a class="nav-link text-white fs-5" aria-current="page">
                                    <i className='bi bi-power'></i>
                                    <Button onClick={handleLogout} className='ms-1 fs-5' style={{ backgroundColor : "#ea7d3e", border: "none", marginBottom: "5px"}}>LOG OUT</Button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={styles.dashboard}>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="profileTooltip">{loggedInName}</Tooltip>}>
                        <div className="position-fixed" style={{ cursor: 'pointer', zIndex: '1000' }} // Ensure the icon is above other elements
                                onClick={handleProfileClick}>
                            <i className="bi bi-person-circle" style={{ fontSize: '80px' }}></i>
                        </div>
                    </OverlayTrigger>
                    <div className={styles.profiledata}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                            <div style={{ fontWeight: "600", marginRight: "10px" }}>USERNAME:</div>
                            <div style={{ borderColor: "#F58343", borderWidth: "2px", borderStyle: "solid", borderRadius: "10px", padding: "7px", width: "300px", margin: "0 auto 0 0" }}>
                                {loggedInName}
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                            <div style={{ fontWeight: "600", marginRight: "10px" }}>EMAIL ID:</div>
                            <div style={{ borderColor: "#F58343", borderWidth: "2px", borderStyle: "solid", borderRadius: "10px", padding: "7px", width: "300px" }}>
                                {loggedInEmail}
                            </div>
                        </div>
                    </div>
                </div>
                    
                
            </div>

            
            
        </div>
        
        </>
    );
}

export default OwnerProfile;
