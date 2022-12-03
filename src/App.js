
import { Form } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Add from './pages/Add';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='products' element={<Products/>}></Route>
            <Route path='products/add' element={<Add />}></Route>
            <Route path='products/:productID' element={<View />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
