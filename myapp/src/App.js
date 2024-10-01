import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Login from './components/login';
import LoginImpExp from './components/importer_login';
import LoginOwner from './components/owner';
import Register from './components/registration';
import Whatsapp from './components/whatsapp';
import ClientRegister from './components/client_reg';
import Enquiry from './components/enquiry';
import Knowledge from './components/knowledge';
import ClientProfile from './components/client_profile';
import ClientOrders from './components/client_orders';
import ClientPlaceOrders from './components/client_place_orders';
import ClientEnquiry from './components/client_enquiry';
import ClientSupport from './components/client_support';
import ClientKnowledge from './components/client_knowledge';
import OwnerOrders from './components/owner_orders';
import OwnerProfile from './components/owner_profile';
import OwnerSupportClient from './components/owner_support_client';
import CustomClearance from './components/custom_clearance';
import Freight_forwarding from './components/freight_forwarding';
import Dgft_consultancy from './components/dgft_consultancy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/login/importer-exporter' element={ <LoginImpExp/>}/>
          <Route path='/login/owner' element={ <LoginOwner/>}/>
          <Route path='/register' element={ <Register/>}/>
          <Route path='/register/client' element={ <ClientRegister/>}/>
          <Route path='/enquiry' element={ <Enquiry/>}/>
          <Route path='/knowledge' element={ <Knowledge/>}/>
          <Route path='/whatsapp' element={ <Whatsapp/>}/>
          <Route path='/client_dashboard/profile' element={<ClientProfile />}></Route>
          <Route path='/client_dashboard/orders' element={<ClientOrders />}></Route>
          <Route path='/client_dashboard/place_orders' element={<ClientPlaceOrders />}></Route>
          <Route path='/client_dashboard/enquiry' element={<ClientEnquiry />}></Route>
          <Route path='/client_dashboard/support' element={<ClientSupport />}></Route>
          <Route path='/client_dashboard/knowledge' element={<ClientKnowledge />}></Route>
          <Route path='/owner_dashboard/orders' element={<OwnerOrders />}></Route>
          <Route path='/owner_dashboard/profile' element={<OwnerProfile />}></Route>
          <Route path='/owner_dashboard/support_client' element={<OwnerSupportClient />}></Route>
          <Route path='/custom_clearance' element={<CustomClearance/>}></Route>
          <Route path='/freight_forwarding' element={<Freight_forwarding/>}></Route>
          <Route path='/dgft_consultancy' element={<Dgft_consultancy/>}></Route>
           
        </Routes>
      </BrowserRouter>
      {/* <Chatbot/> */}
    </div>
  );
}


export default App;
