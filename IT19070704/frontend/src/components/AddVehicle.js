import React ,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {  FormControl } from '@material-ui/core';

import 'date-fns';
import SaveIcon from '@material-ui/icons/Save';

import { Button, TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        maxWidth: '600px',
        marginLeft: '40 px',
        marginRight: '40px',
        marginBottom: '5ch',
        marginTop: '5ch',
        position: 'relative',
        
    },
    textField: {
   
        width: '50ch',
        margin: theme.spacing(4),
       
    },

    div: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgb(245, 245, 245)',
        position: 'relative',
        maxWidth: '600px',
        margin: '0px auto 120px',
        padding: '30px 90px 80px',
        
        
    },
    button: {
        margin: theme.spacing(1),
        width: '50ch',
      },

    
     
    
}));
  


const AddVehicle = () => {

   
    const [type, settype] = useState(" "); 
    const [owner, Setowner] = useState(" ");
    const [description, Setdescription] = useState(" ");
    
    
    const classes = useStyles();

    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const vehicle = { type, owner,description};
        console.log(vehicle);

        fetch('http://localhost:5000/app/createVehicle', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",              },
            body: JSON.stringify(vehicle)
        }).then(() => { console.log("new vehicle added!!!"); })
    }
    

    return (
        <div>
            <div className="top">
             <h4 className="h1">Add a new Vehicle </h4>
            </div>

        <div className={classes.div}>
            
            
                <form onSubmit={handleSubmit}>
            
                <center>
                <FormControl  > 
                        <TextField className={classes.textField}    id="outlined-size-small"  size="small"  value={type} onChange={(e) => settype(e.target.value)}   style={{backgroundColor: 'white'}} label="Vehicle type" variant="outlined" color="primary" />
                </FormControl>

                <FormControl  >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={owner} onChange={(e) => Setowner(e.target.value)}  style={{backgroundColor: 'white'}}  label="Vehicle owner" variant="outlined" color="primary" />
                </FormControl>
                    
                <FormControl  >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={description} onChange={(e) => Setdescription(e.target.value)}  style={{backgroundColor: 'white'}}  label="Vehicle descriprion" variant="outlined" color="primary" />
                </FormControl>

                    <FormControl>
                        <Button  type="submit" color="primary" variant="outlined" className={classes.textField} endIcon={<SaveIcon />}> Confirm </Button>
                    </FormControl>
                    </center>
        
                </form>
                
            </div>
            
            </div>);
}

export default AddVehicle;