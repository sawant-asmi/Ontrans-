import React from 'react';
import styles from './owner_orders.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import orders_img from './asserts/orders.png';
import { Image, Table, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

class OwnerOrders extends React.Component {
    loggedInEmail = sessionStorage.getItem('loggedInEmail');
    loggedInName = this.loggedInEmail ? this.loggedInEmail.split('@')[0] : '';

    constructor(props) {
      super(props);
      this.state = {
          orders: [], // Initialize orders as an empty array
          loading: true
      };
  }

  async componentDidMount() {
    try {
        // Set loading state to true before making the API call
        this.setState({ loading: true });

        const response = await fetch('http://localhost:5000/api/get_client_orders');
        if (response.ok) {
            const orders = await response.json();
            // Update state with orders and set loading to false
            this.setState({ orders, loading: false });
        } else {
            console.error('Failed to fetch orders');
            // Set loading to false in case of failure
            this.setState({ loading: false });
        }
    } catch (error) {
        console.error('Error fetching orders:', error);
        // Set loading to false in case of error
        this.setState({ loading: false });
    }
}



    handleProfileClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/profile'; 
    };
    handleOrdersClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/orders'; 
    };
    handleSupportClientClick = () => {
        // Redirect to profile page
        window.location.href = '/owner_dashboard/support_client'; 
    };
    
    handleLogout = () => {
        // Clear session storage or any other stored login information
        sessionStorage.removeItem('loggedInEmail');
        // Redirect to login page or any other appropriate page
        window.location.href = '/login';
    };

    
      render() {
        const { orders, loading } = this.state;
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
                                <a onClick={this.handleSupportClientClick} style={{ cursor: 'pointer' }} class="nav-link text-white fs-5" aria-current="page">
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
                                    <Button onClick={this.handleLogout} className='ms-1 fs-5' style={{ backgroundColor : "#ea7d3e", border: "none", marginBottom: "5px"}}>LOG OUT</Button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    
                </div>
                </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.scrollableContent}>
                    <div style={{textAlign:"center",  marginBottom: "20px"}}>
                          <h1 style={{textAlign:"center", color:"#ef7e3d", display:"inline-block"}}>CLIENT ORDERS</h1>
                          <Image src={orders_img} alt="Support" style={{display:"inline-block", height:"100px", width:"100px", marginLeft:"20px", marginTop:"-20px"}}/>
                        </div>
                        {/* {loading ? (
                            <p>Loading...</p>
                        ) : ( */}
                        <div style={{ overflowX: 'scroll', maxHeight: 'calc(100vh - 150px)' }}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Lirst Name</th>
                                    <th>Phone Number</th>
                                    <th>Email Id</th>
                                    <th>Load Port</th>
                                    <th>Discharge Port</th>
                                    <th>Incoterms</th>
                                    <th>Packages</th>
                                    <th>Type Of Packages</th>
                                    <th>Length</th>
                                    <th>Width</th>
                                    <th>Height</th>
                                    <th>Units</th>
                                    <th>Freight Type</th>
                                    <th>Load Type</th>
                                        {/* Add more table headers as needed */}
                                    </tr>
                                </thead>
                                <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="17" className="text-center">Loading...</td>
                                    </tr>
                                ) : (
                                    orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                        <td>{order.firstname}</td>
                                        <td>{order.lastname}</td>
                                        <td>{order.phone}</td>
                                        <td>{order.email}</td>
                                        <td>{order.loadport}</td>
                                        <td>{order.dischargeport}</td>
                                        <td>{order.incoterms}</td>
                                        <td>{order.packages}</td>
                                        <td>{order.typeofpackage}</td>
                                        <td>{order.length}</td>
                                        <td>{order.width}</td>
                                        <td>{order.height}</td>
                                        <td>{order.units}</td>
                                        <td>{order.freighttype}</td>
                                        <td>{order.loadtype}</td>
                                            {/* Add more table cells as needed */}
                                        </tr>
                                    ))
                                  )}
                                </tbody>
                            </Table>
                            </div>
                        {/* )} */}
                    </div>
                </div>
                

            
            
        
        
        </>
    );
};
}

export default OwnerOrders;
