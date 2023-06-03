import './App.css';
import { Component } from 'react';
import { Route,  Routes } from 'react-router-dom';
import VilleList from './components/VilleList';
import AddPharmacie from './components/AddPharmacie';
import Image from './components/Photo';
import { FaHome, FaMapMarkerAlt, FaHospital, FaList,} from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';


import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddVilles from './components/AddVilles';
import AddZone from './components/AddZone';
import Home from './components/Home';
import LoginePage from './components/LoginPage'
import ContactPage from './components/ContactPage';

class App extends Component {
  render(){
  return (
     <div>

<Navbar expand="lg" bg="success" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">FATIMA-EZZAHRA PHARMACIE</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >
        <Nav.Link href="/"><FaHome className="me-1" />Accueil</Nav.Link>
        <Nav.Link href="/api/villes/add"><FaMapMarkerAlt className="me-1" />Villes</Nav.Link>
        <Nav.Link href="/api/zone/add"><FaMapMarkerAlt className="me-1" />Zones</Nav.Link>
        <Nav.Link href="/api/pharmacies/add"><FaHospital className="me-1" />Pharmacies</Nav.Link>
        <Nav.Link href="/api/villes/"><FaList className="me-1" />Liste Pharmacies</Nav.Link>
        <Nav.Link href="/components/ContactPage">< FaHospital className="me-1" />Contact</Nav.Link>
         <Nav.Link href="/components/LoginPage">< FiLogOut className="me-1" />logout</Nav.Link>
         
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div>
      <Routes>
      <Route path={'/'} element={<Home/>}/>
        <Route path={'/api/villes'} element={<VilleList/>}/>
        <Route path={'/api/villes/add'} element={<AddVilles/>}/>
        <Route path={'/api/villes/:nom/zones'} element={<VilleList/>}/>
        <Route path={'/api/villes/:nom/zones/:nom/pharmacies'} element={<VilleList/>}/>
        <Route path={'/api/pharmacies/add'} element={<AddPharmacie/>}/>
        <Route path={'/api/pharmacies/add/:id'} element={<AddPharmacie/>}/>
        <Route path={'/api/zone/add'} element={<AddZone/>}/>
        <Route path={'/photo'} element={<Image/>}/>
        <Route path={'/components/LoginPage'} element={<LoginePage/>}/>
        <Route path={'/components/ContactPage'} element={<ContactPage/>}/>

        
    </Routes>
    </div>

    </div>
    
  );
}
}
export default App;