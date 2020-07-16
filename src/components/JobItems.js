import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles( theme =>({
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid #ff7961',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after': {
            content: "''",
            position: 'absolute'
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            right: '-0.625rem',
            top: 'calc(50% - 5px)',
            borderStyle: 'solid',
            borderColor: '#ff7961 #ff7961 transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]: {
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)': {
                float: 'right',
                margin: '1rem',
                borderColor: '#ff7961'
            },
            '&:nth-of-type(2n):before': {
                right: 'auto',
                left: '-0.625rem',
                borderColor: 'transparent transparent #ff7961 #ff7961',
            },
        }
    },
    timeLineYear: {
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: '#3f51b5',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)': {
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before': {
                display: 'none'
            },
        }
    },
    heading: {
        color: '#1D1D1D',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: '#1D1D1D',
        padding: '0',
        textTransform: 'uppercase'
    }
}))

const ResumeItems = (props) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>
                { props.job.year}
            </Typography>
            <Box component='div' className={classes.timeLineItem}>
                <Typography variant='h5' align='left' className={classes.subHeading}>
                    {props.job.position}
                </Typography>
                <Typography variant='body1' align='left' style={{ color: '#f44336'}}>
                    {props.job.company}
                </Typography>
                <Typography variant='subtitle1' align='left'>
                    <List>
                        {
                            props.job.description.map( (item, idx) => (
                                <ListItem  key={idx} >
                                    <ListItemText>
                                        { item }
                                    </ListItemText>
                                </ListItem>
                                )
                            )
                        }                                                    
                    </List>
                </Typography>
            </Box>            
        </>
    )
}

export default ResumeItems
