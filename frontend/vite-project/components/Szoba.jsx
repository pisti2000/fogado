import { useEffect, useState } from "react";
import axios from "axios";

function Szoba() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/hettorpe')
      .then(response => setRooms(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Szobák listája</h2>
      <table className="striped-table">
        <thead>
          <tr>
            <th>Szoba neve</th>
            <th>Ágyak száma</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.sznev}</td>
              <td>{room.agy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Szoba;