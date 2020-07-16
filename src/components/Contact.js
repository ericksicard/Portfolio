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

 const useStyles = makeStyles( theme => ({
     form: {
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         position: 'absolute',
         background: 'rgba(0, 41, 80, 0.5)',
         padding: '5rem'
     },
     button: {
         marginTop: '1rem',
         color: '#f44336',
         borderColor: '#f44336'
     }
 }))

 const InputField = withStyles({
     root: {
         '& label.Mui-focused': {
             color: '#f44336'
         },
         '& label': {
             color: 'white'
         },
         '& .MuiOutlinedInput-root': {
             '& fieldset': {
                 borderColor: 'white'
             },
             '&:hover fieldset': {
                 borderColor: 'white'
             },
             '&.Mui-focused fieldset': {
                 borderColor: 'white'
             }
         }
     }
 })(TextField)


const Contact = () => {
    const classes = useStyles();

    return (
        <Box component='div' >
            <Navbar />
            <Grid container justify='center' >
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{ color: '#f44336', textAlign: 'center', textTransform: 'uppercase' }}>
                        contact form
                    </Typography>
                    <InputField fullWidth={true} label='Name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/> <br/>
                    <InputField fullWidth={true} label='Email' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/> <br/>
                    <InputField fullWidth={true} label='Company name' variant='outlined' margin='dense' size='medium' inputProps={{style:{ color:'white'}}}/>
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} >
                        contact me
                    </Button>
                </Box>

            </Grid>
            
        </Box>
    )
}

export default Contact
