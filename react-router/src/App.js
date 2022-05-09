
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import Product from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import User from './components/User';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/Authentication';
import Login from './components/Login';
import RequireAuthentication from './components/RequireAuthentication';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='order-summary' element={<OrderSummary />} /> 
          <Route path='product' element={<Product />}>
            <Route path='featured' element={<FeaturedProduct />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='user' element={<User />} >
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='profile' element={<RequireAuthentication>{<Profile />}</RequireAuthentication>} />
          <Route path='login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
