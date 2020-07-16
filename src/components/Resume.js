import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Working from './Working'
import Education from './Education'

const useStyles = makeStyles( theme =>({
    mainContainer: {
        background: "#E1E2E1"
    } 
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component='header' className={classes.mainContainer}>
                <Working />
                <Education />
            </Box>
        </>
    )
}

export default Resume
