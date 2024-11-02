import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import HeaderBar from './components/HeaderBar';


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
          </Routes>
          
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
