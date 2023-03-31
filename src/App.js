import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    return axios.get("http://domain.com/api/v1/users")
    .then((response) => setUser(response.data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
          <li key={userObj._id}>{userObj.nya} {userObj.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
