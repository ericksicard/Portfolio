import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import profile from '../profile-picture.jpg';

// CSS Styles
const useStyles = makeStyles( theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: '#f44336'
    },
    subtitle: {
        color: '#ff7961',
        marginBottom: '3rem'
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={profile} alt='Erick Sicard'/>
            </Grid>
            <Typography className={classes.title} variant='h4'>
                <Typed strings={['Erick Sicard']} typeSpeed={40} />
            </Typography> <br/>
            <Typography className={classes.subtitle} variant='h5'>
                <Typed 
                strings={['Web Development', 'Web Design', 'MERN Stack']}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </Typography>            
        </Box>
    )
}

export default Header
