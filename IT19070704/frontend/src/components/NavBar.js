import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Nav = () => {

    const [Value, SetValue] = useState(2);
   
    const handleChange = (event, newValue) => {
      SetValue(newValue);
    };

  
    return (
        <div >
            <nav >
                <div className="navB">
                    <Paper square className="pa">
                        <Tabs value={Value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                        <Tab label="All Vehicles" component={Link} to="/get" />      
                    <Tab label="Add new Vehicle" component={Link} to="/createVehicle" />
                            <Tab label="Add new Product" component={Link} to="/CreateProduct" />
                            <Tab label="All Products" component={Link} to="/" />
                            <Tab label="Payment calculation" component={Link} to="/rent" />  
                        </Tabs>
                </Paper>
                    </div>    
        </nav>
    </div> );
}
 
export default Nav;