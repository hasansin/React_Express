import React ,{useState,useEffect} from 'react';
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import {  FormControl } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import SaveIcon from '@material-ui/icons/Save';

import { Button, TextField, InputLabel } from '@material-ui/core';

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
const AddVehicle = () => {

   
    const [Code, Setcode] = useState(" "); 
    const [Model, Setmodel] = useState(" ");
    const [Type, SetType] = useState(" ");
    const [Name, Setname] = useState(" ");
    const [options, setOptions] = useState([]);
    const [seletedCategories, setSelectedCat] = useState([]);
    const [Categories, Setcategory] = useState([]);
    const [date, SetSelectedDate] = useState(new Date());
    const classes = useStyles();

    const handledate = (newdate) => {
        SetSelectedDate(newdate);
        console.log(newdate);
    }

      
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const vehicle = { Code, Model, Type, Name, date, Categories };
       
       
        vehicle.Categories = seletedCategories.map((subject) => {
            return subject.value;
        });
        
        
        console.log(vehicle);
        fetch('http://localhost:5000/app/create', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",              },
            body: JSON.stringify(vehicle)
        }).then(() => { console.log("new vehicle added!!!"); })
    }

    
    useEffect(async () => {
		const res = await fetch("http://localhost:5000/app/get");
		const data = await res.json();
		
        console.log(data);
        setOptions(data.map((subject) => {
                return { value: subject._id, label: subject.Name };
            }));
      
	}, []);
    
   

    return (
        <div>
            <MuiThemeProvider theme={theme}>
            <div className="top">
             <h4 className="h1">Add a new Vehicle </h4>
            </div>

            <div className={classes.div}>
                <form onSubmit={handleSubmit}>
            
                
                <FormControl className={classes.root} > 
                        <TextField className={classes.textField}    id="outlined-size-small" size="small"  value={Code} onChange={(e) => Setcode(e.target.value)}   style={{backgroundColor: 'white'}} label="Vechicle code" variant="outlined" color="secondary" />
                </FormControl>

                <FormControl className={classes.root} >  
                    <TextField className={classes.textField}  id="outlined-size-small" size="small" value={Model}  onChange={(e) => Setmodel(e.target.value)}   style={{backgroundColor: 'white'}} label="Vechicle model" variant="outlined" color="secondary" />
                </FormControl>
                

                <FormControl className={classes.root} >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={Type} onChange={(e) => SetType(e.target.value) } style={{backgroundColor: 'white'}} label="Vechicle Type" variant="outlined" color="secondary" />
                </FormControl>
                
        
                <FormControl className={classes.root} >
                        <TextField className={classes.textField} id="outlined-size-small" size="small" value={Name} onChange={(e) => Setname(e.target.value)}  style={{backgroundColor: 'white'}}  label="Vechicle Name" variant="outlined" color="secondary" />
                </FormControl>
                    <FormControl className={classes.root} >
                        <Select  style={{fontFamily:'Roboto'}} 
                        isMulti
                        name="colors"
                                options={options}
                                onChange={setSelectedCat}
                        className={classes.textField}
                        classNamePrefix="select"
                    />
                    </FormControl>
                  

                    <FormControl className={classes.root}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}  style={{backgroundColor: 'white'}} >
                            <KeyboardDatePicker className={classes.textField} label="Manufactured Date"  id="filled-secondary" variant="inline"  format="MM/dd/yyyy" margin="normal"  value={date} onChange={handledate}  />
                        </MuiPickersUtilsProvider>
                    </FormControl>

                    <FormControl>
                        <Button  type="submit" color="secondary" variant="outlined" className={classes.button} endIcon={<SaveIcon />}> Confirm </Button>
                    </FormControl>
                   
        
                </form>
                
            </div>
            </MuiThemeProvider>
            </div>);
}

export default AddVehicle;