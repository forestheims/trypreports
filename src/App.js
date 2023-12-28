import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Views/Auth/Auth.js';
import { useState } from 'react';
import { getUser } from './services/users.js';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Auth user={user} setUser={setUser} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;