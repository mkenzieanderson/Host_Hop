import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HeaderBar from './components/HeaderBar/HeaderBar.js';
import CreateAccount from './pages/CreateAccount/CreateAccount.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route 
              path="/create-account"
              element={<CreateAccount />}
            />
          </Routes>
          
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
