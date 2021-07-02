import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/NavBar";
import Vehicle from './components/AddVehicle';
import Product from './components/Addproduct';
import AllVehicles from './components/AllVehicles';
import Allproducts from './components/allProducts';
import Payments from './components/Payment';
import "./Styles/styles.css";

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
        <Route exact path="/createVehicle">
        <Vehicle/>
        </Route>
        <Route exact path="/CreateProduct">
        <Product/>
        </Route>
        <Route exact path="/get">
        <AllVehicles/>
        </Route>
        <Route exact path="/">
        <Allproducts/>
        </Route>
        <Route exact path="/rent">
        <Payments/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
