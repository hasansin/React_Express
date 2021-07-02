import React ,{useState,useEffect} from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import {  FormControl } from '@material-ui/core';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import 'date-fns';
import SaveIcon from '@material-ui/icons/Save';

import { Button, TextField } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      // Purple and green play nicely together.
      secondary: { main: '#0091ea' }, 
    },
    typography: { useNextVariants: true },
  });


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        maxWidth: '600px',
        marginLeft: '50px',
        marginRight: '50px',
        marginBottom: '5ch',
        marginTop: '5ch',
        position: 'relative',
       
    },
    textField: {
        
        width: '50ch',
       
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
        marginLeft: theme.spacing(7),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        width: '50ch',
        
      },

    
     
    
  }));
const AddProduct = () => {

   
    const [Code, Setcode] = useState(" "); 
    const [Amount, SetAmount] = useState(" ");
    const [Instock, SetInstock] = useState(" ");
    const [Name, Setname] = useState(" ");
    const [options, setOptions] = useState([]);
    const [seletedVehicles, setSelectedV] = useState([]);
    const [Vehicles, SetVehicles] = useState([]);
    const classes = useStyles();

  
      
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = { Code,Amount , Instock, Name,Vehicles };
       
       
        product.Vehicles = seletedVehicles.map((Vehicle) => {
            return Vehicle.value;
        });
        
        
        console.log(product);
        fetch('http://localhost:5000/app/CreateProduct', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",              },
            body: JSON.stringify(product)
        }).then(() => { console.log("new product added!!!"); })
    }

    
    useEffect(async() => {
        
        
    const res = await fetch("http://localhost:5000/app/get");
    const data = await res.json();
		
    console.log(data);
    SetVehicles(data);
    setOptions(data.map((vehicle) => {
        return { value: vehicle._id, label: vehicle.type };
    }));
},[]);
    
   

    return (
        <div>
            <MuiThemeProvider theme={theme}>
            <div className="top">
             <h4 className="h1">Add a new Product </h4>
            </div>

            <div className={classes.div}>
                <form onSubmit={handleSubmit}>
            
                
                <FormControl className={classes.root} > 
                        <TextField className={classes.textField}    id="outlined-size-small" size="small"  value={Code} onChange={(e) => Setcode(e.target.value)}   style={{backgroundColor: 'white'}} label="Product code" variant="outlined" color="secondary" />
                </FormControl>

                <FormControl className={classes.root} >  
                    <TextField className={classes.textField}  id="outlined-size-small" size="small" value={Amount} type ="number" onChange={(e) => SetAmount(e.target.value)}   style={{backgroundColor: 'white'}} label="Product Amount" variant="outlined" color="secondary" />
                </FormControl>
                

                <FormControl className={classes.root} >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" type="number" value={Instock} onChange={(e) => SetInstock(e.target.value) } style={{backgroundColor: 'white'}} label="Instock" variant="outlined" color="secondary" />
                </FormControl>
                
        
                <FormControl className={classes.root} >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={Name} onChange={(e) => Setname(e.target.value)}  style={{backgroundColor: 'white'}}  label="Product Name" variant="outlined" color="secondary" />
                </FormControl>
                    <FormControl className={classes.root} >
                        <Select  style={{fontFamily:'Roboto',marginRight:'5px'}} 
                        isMulti
                        name="colors"
                                options={options}
                                onChange={setSelectedV}
                        className={classes.textField}
                        classNamePrefix="select"
                    />
                    </FormControl>
                  

                  

                    <FormControl>
                        <Button  type="submit" color="secondary" variant="outlined" className={classes.button} endIcon={<SaveIcon />}> Confirm </Button>
                    </FormControl>
                   
        
                </form>
                
            </div>
            </MuiThemeProvider>
            </div>);
}

export default AddProduct;