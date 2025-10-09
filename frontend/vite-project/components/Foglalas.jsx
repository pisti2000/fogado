import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Foglalas() {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/szobak')
      .then(response => setRooms(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/kihasznaltsag')
      .then(response => setBookings(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filteredBookings = selectedRoom
    ? bookings.filter(booking => booking.sznev === selectedRoom)
    : [];

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
            <Form.Group controlId="roomSelect" className="mb-3">
              <Form.Label>A vendégszobák foglaltsága</Form.Label>
              <Form.Select value={selectedRoom} onChange={handleChange} aria-label="Szoba kiválasztása">
                <option value="">Válassza ki, melyik szoba adatait szeretné látni:</option>
                {Array.isArray(rooms) && rooms.map((room, index) => (
  <option key={index} value={room.sznev}>{room.sznev}</option>
))}

              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!selectedRoom}>
              Adatok
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div>
            <h2>A szobák kihasználtsága</h2>
            <table>
              <thead>
                <tr>
                  <th>Szoba neve</th>
                  <th>Vendégek száma</th>
                  <th>Vendégéjszakák száma</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking, index) => (
                    <tr key={index}>
                      <td>{booking.sznev}</td>
                      <td>{booking.vendeg}</td>
                      <td>{booking.vendegejszakak}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">Nincs adat a kiválasztott szobára.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Foglalas;