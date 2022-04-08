import React from 'react';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ProductPage from"./components/ProductPage";
import Cart from"./components/Cart";
import Editproduct from"./components/Editproduct";
import Productlisting from './components/Productlisting';
import SignUp from'./components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <>
  <Navbar />
  <Search />
  <Router>
  <Routes>
          <Route path="/" component={
Login
          }/>
    
          <Route path="/Signup" component={SignUp}/>
          <Route path="/Cart" component={Cart}/>
          <Route path="/Productlisting" component={Productlisting}/>
          <Route path="/Editproduct" component={Editproduct}/>
    
                  </Routes>
        </Router>

  </>
  );
}

export default App;
