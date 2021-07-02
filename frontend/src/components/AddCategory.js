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
  


const AddCategory = () => {

   
    const [rent, setRent] = useState(0); 
    const [Name, Setname] = useState(" ");
    
    
    const classes = useStyles();

    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Category = { rent, Name};
        console.log(Category);

        fetch('http://localhost:5000/app/createCategory', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",              },
            body: JSON.stringify(Category)
        }).then(() => { console.log("new Category added!!!"); })
    }
    

    return (
        <div>
            <div className="top">
             <h4 className="h1">Add a new Category </h4>
            </div>

        <div className={classes.div}>
            
            
                <form onSubmit={handleSubmit}>
            
                <center>
                <FormControl  > 
                        <TextField className={classes.textField}    id="outlined-size-small"  type ="number" size="small"  value={rent} onChange={(e) => setRent(e.target.value)}   style={{backgroundColor: 'white'}} label="Category cost" variant="outlined" color="primary" />
                </FormControl>

                <FormControl  >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={Name} onChange={(e) => Setname(e.target.value)}  style={{backgroundColor: 'white'}}  label="Category" variant="outlined" color="primary" />
                </FormControl>
                    
                

                    <FormControl>
                        <Button  type="submit" color="primary" variant="outlined" className={classes.textField} endIcon={<SaveIcon />}> Confirm </Button>
                    </FormControl>
                    </center>
        
                </form>
                
            </div>
            
            </div>);
}

export default AddCategory;