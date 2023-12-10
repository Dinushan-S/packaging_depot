import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers'
import Items from './pages/Items';
import GiftCards from './pages/GiftsCards';
import ItemKits from './pages/ItemKits';
import Receivings from './pages/Receivings';
import Reports from './pages/Reports';
import Sales from './pages/Sales';
import Suppliers from './pages/Suppliers';
import { BreadCrums } from './components/BreadCrums';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/items' element={<Items />} />
          <Route path='/giftcards' element={<GiftCards />} />
          <Route path='/itemkits' element={<ItemKits />} />
          <Route path='/receivings' element={<Receivings />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/suppliers' element={<Suppliers />} />
          <Route render={(props) => <BreadCrums {...props} />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar />
    //   {/* <div className='container'> */}
    //   {/* <Sidebar /> */}
    //   <Home />
    //   {/* </div> */}
    // </div>
  );
}

export default App;
