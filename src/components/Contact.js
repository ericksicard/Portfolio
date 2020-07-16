import React, { useState } from 'react';
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
import emailjs from 'emailjs-com'

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
     const [values, setValues] = useState({
         name: '',
         email: '',
         company: '',
         comments: ''
     });
     
     const handleChange = (event, name) => {
         const value = event.target.value;
        setValues({ ...values, [name]: value })
     }

    const handleSubmit = event => {
        event.preventDefault();
        const serviceID = process.env.REACT_APP_SERVICEID;
        const templteID = process.env.REACT_APP_TEMPLATEID;
        const userID = process.env.REACT_APP_USERID;
        let templateParams = {
            to_name: 'Erick Sicard',
            from_name: values.name,
            company_name: values.company,
            message_html: values.comments,
            reply_to: values.email
        }

        emailjs.send(serviceID, templteID, templateParams, userID)
            .then( response => {
                console.log('SUCCES!', response.status, response.text)
                setValues({ ...values, name: '', email: '', company: '', comments: ''})                
            })
            .catch( err => { console.log(err) })
    }

    return (
        <Box component='div' >
            <Navbar />
            <Grid container justify='center' >
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{ color: '#f44336', textAlign: 'center', textTransform: 'uppercase' }}>
                        contact form
                    </Typography>
                    <InputField 
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{style:{ color:'white'}}}
                        value={values.name}
                        onChange={ event => handleChange(event, 'name')}
                    /> <br/>
                    <InputField 
                        fullWidth={true} 
                        label='Email' 
                        variant='outlined' 
                        margin='dense' 
                        size='medium' 
                        inputProps={{style:{ color:'white'}}}
                        value={values.email}
                        onChange={ event => handleChange(event, 'email')}
                    /> <br/>
                    <InputField 
                        fullWidth={true} 
                        label='Company name' 
                        variant='outlined' 
                        margin='dense' 
                        size='medium' 
                        inputProps={{style:{ color:'white'}}}
                        value={values.company}
                        onChange={ event => handleChange(event, 'company')}
                    />
                    <InputField 
                        fullWidth={true} 
                        label='Comments' 
                        variant='outlined' 
                        margin='dense' 
                        size='medium' 
                        inputProps={{style:{ color:'white'}}}
                        value={values.comments}
                        onChange={ event => handleChange(event, 'comments')} 
                        multiline
                    />
                    <Button
                        className={classes.button} 
                        variant='outlined' 
                        fullWidth={true} 
                        endIcon={<SendIcon/>}
                        value='Submit'
                        onClick={ event => handleSubmit(event) } 
                    >
                        contact me
                    </Button>
                </Box>

            </Grid>
            
        </Box>
    )
}

export default Contact
