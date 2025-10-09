import top from '../img/top.jpg';
import '../css/Header.css';

import {Container} from 'react-bootstrap';  
function Header() {
  return (
    <Container fluid className='crop-container'>
    <header className="header">
      <img src={top} alt="Napraforgós védjegy" className="info-image w-100" />
    </header>
    </Container>
  );
}

export default Header;