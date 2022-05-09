
import './App.css';
// import Form from './components/Form';
import NavBar from './components/layout/NavBar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import AddProduct from './components/pages/AddProduct';
import EditProduct from './components/pages/EditProduct';


function App() {
  return (
    <div className="App">
      {/* <Form className="form"></Form> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='addproduct' element={<AddProduct />} />
        <Route path='editproduct' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;