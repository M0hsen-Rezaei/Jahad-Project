import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home-Page';
import CourceSinglePage from './pages/CourceSingle-Page'
import CourcesGroupPage from './pages/CourcesGroup-Page'
import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './Contexts/BuyContext';

function App() {
  return (
    <CartProvider>
      <div className="App" dir="rtl">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/cource/:category/:ID' element={<CourceSinglePage />}></Route>
          <Route path='/cources/:category' element={<CourcesGroupPage />}></Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
