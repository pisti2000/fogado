import '../css/Info.css';
import Szoba from './Szoba.jsx';
import {Container, Row, Col} from 'react-bootstrap';  
import logo from '../img/logo.png';
import ketagyas from '../img/ketagyas.jpg';
import holloko from '../img/holloko_masolata.jpg';

function Info() {
  return (
    <Container fluid className='info-section mt-4'>
      <Row>
        <Col md={4} className='bg-green-section'>
    
      <h2>Napraforgós Nemzeti Tanúsító Védjegy célja</h2>
      <p>
      A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára. A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.
      </p>
      <a href="https://falusiturizmus.eu/">Tájákoztató oldal</a>
      <br />
      <img src={logo} alt="Logo" className="info-image" />
      <br />
      <img src={holloko} alt="Hollókő másolata" className="info-image w-100" />
        </Col>
      
      <Col md={4}>
      <h2>Falusi szálláshely fajtái</h2>
      <ul>
        <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll..</li>
        <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
        <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
        <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
      </ul>
      <br />
      <img src={ketagyas} alt="Kétágyas" className="info-image w-100" />
      </Col>
     
      <Col md={4}  className='bg-green-section'>
      
      <Szoba />
      <ul>
        <li>Ruhásszekrény</li>
        <li>Saját fürdőszoba zuhanytálcával</li>
        <li>WC (fürdőszobával egyben)</li>
      </ul>
      </Col>
      

      </Row>
    </Container>
  );
}

export default Info;