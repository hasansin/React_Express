import React from "react";
import "./Styles/table.css";
import "./Styles/nav.css";
import AllVehicles from "./components/AllVehicles";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Categories from "./components/Categories";
import AddVehicle from "./components/AddVehicle";
import Navbar from "./components/nav"
import AddCategory from "./components/AddCategory";
import Payments from './components/payments';
export default class App extends React.Component {
	
	render() {
        return (
            
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                    <AllVehicles />
                    </Route>
                    <Route exact path="/categories">
                    <Categories/>
                    </Route>
                    <Route exact path="/add">
                    <AddVehicle/>
                    </Route>
                    <Route exact path="/addCategory">
                    <AddCategory/>
                    </Route>

                    <Route exact path="/rent">
                    <Payments/>
                    </Route>
                    
                </Switch>
                </Router>
		);
	}
}


