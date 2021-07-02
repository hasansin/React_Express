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
                            <Tab label="AllVehicles" component={Link} to="/" />
                            <Tab label="Add New Vehicle" component={Link} to="/add" />
                            <Tab label="Vehicle categories" component={Link} to="/categories" />
                            <Tab label="Add new categories" component={Link} to="/addCategory" />
                            <Tab label="calculate rent" component={Link} to="/rent" />
                        </Tabs>
                </Paper>
                    </div>    
        </nav>
    </div> );
}
 
export default Nav;