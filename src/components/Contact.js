import React from 'react';
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    TextField,
    Button,
    Grid
 } from '@material-ui/core';
 import SendIcon from '@material-ui/icons/Send';

 const InputField = withStyles({
     root: {
         '& label.Mui-focused': {
             color: 'tomato'
         },
         '& label': {
             color: 'tan'
         },
         '& .MuiOutlinedInput-root': {
             '& fieldset': {
                 borderColor: 'tan'
             },
             '&:hover fieldset': {
                 borderColor: 'tan'
             },
             '&.Mui-focused fieldset': {
                 borderColor: 'tan'
             }
         }
     }
 })(TextField)


const Contact = () => {
    return (
        <Box component='div'>
            <Navbar />
            <Grid container justify='center'>
                <Box component='form'>
                    <Typography variant='h5'>
                        hire or contact me...
                    </Typography>
                    <InputField fullWidth={true} label='Name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/> <br/>
                    <InputField fullWidth={true} label='Email' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/> <br/>
                    <InputField fullWidth={true} label='Company name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/>
                </Box>

            </Grid>
            
        </Box>
    )
}

export default Contact
