import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles( theme =>({
    mainContainer: {
        background: "#3f51b5"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up('md')]: {
            padding: '2rem',
            '&:before': {
                left: 'calc(50% - 1px)',
                right: 'auto'
            }
        }
    },
    timeLineItem: {
        padding: '1rem',
        borderBottom: '2px solid tan',
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
        background: '#ff7961',
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
        color: 'white',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    subHeading: {
        color: 'white',
        padding: '0',
        textTransform: 'uppercase'
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component='header' className={classes.mainContainer}>
                <Typography variant='h4' align='center' className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Manager
                        </Typography>
                        <Typography variant='body1' align='left' style={{ color: '#f44336'}}>
                            Orlando Distributors, Inc.
                        </Typography>
                        <Typography variant='subtitle1' align='left'>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Planned, developed, tested, deployed, and maintained the company's E-Commerce.
                                    </ListItemText>
                                </ListItem>                             
                                <ListItem>
                                    <ListItemText>
                                        Planned, tested, and implemented third parties APIs integrations for online payments, accounting, and shipments.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Implemented, managed, and provided support for Zoho's modules for the company emails and online CRM software.
                                    </ListItemText>
                                </ListItem>                                
                            </List>
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            Co-Founder
                        </Typography>
                        <Typography variant='body1' align='left' style={{ color: '#f44336'}}>
                            THPro USA, LLC
                        </Typography>
                        <Typography variant='subtitle1' align='left'>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Planned, developed, and maintained the company's E-Commerce website.
                                    </ListItemText>
                                </ListItem>                             
                                <ListItem>
                                    <ListItemText>
                                        Implemented, managed, and provided support for Zoho modules for the company's emails, accounting, inventory management, CRM, and social media marketing.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Implemented and provided support for an online service focused on the company's customers, to enable them to process orders online, track orders and payments, make online payments, and receive notifications and news.
                                    </ListItemText>
                                </ListItem>                                
                            </List>
                        </Typography>
                    </Box>
                    <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2011
                    </Typography>
                    <Box component='div' className={classes.timeLineItem}>
                        <Typography variant='h5' align='left' className={classes.subHeading}>
                            IT Support Specialist
                        </Typography>
                        <Typography variant='body1' align='left' style={{ color: '#f44336'}}>
                            Lenlyn Ltd.
                        </Typography>
                        <Typography variant='subtitle1' align='left'>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                    Responsible for daily updates of the company's Point Of Sale system, so the North American currency exchange stores located at different airports and the company online service could offer the most updated, reliable, and competitive currency exchange rates.
                                    </ListItemText>
                                </ListItem>                             
                                <ListItem>
                                    <ListItemText>
                                    Worked on testing, implementation, and support of new features developed for the company's POS system and the online services.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                    Administered the company's SQL Server including, but not limited to, checking for data consistency, transnational data update, management of users' access to company systems, and the update of records related to the OFAC Sanctions List.
                                    </ListItemText>
                                </ListItem>                                
                                <ListItem>
                                    <ListItemText>
                                    Generated periodical reports using the company's SQL Server to evaluate the business activity.                                    </ListItemText>
                                </ListItem>                                
                            </List> 
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
