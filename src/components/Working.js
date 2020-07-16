import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import JobItems from './JobItems'

const useStyles = makeStyles( theme => ({
    heading: {
        color: '#1D1D1D',
        padding: '3rem 0',
        textTransform: 'uppercase'
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #ff7961",
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
    }
}))

const experienceItems = [
    {
        year: '2018',
        position: 'Manager',
        company: 'Orlando Distributors, Inc.',
        description: [
            "Planned, developed, tested, deployed, and maintained the company's E-Commerce.",
            "Planned, tested, and implemented third parties APIs integrations for online payments, accounting, and shipments.",
            "Implemented, managed, and provided support for Zoho's modules for the company emails and online CRM software."
        ]
    },
    {
        year: '2015',
        position: 'co-founder',
        company: 'THPro USA, LLC',
        description: [
            "Planned, developed, and maintained the company's E-Commerce website.",
            "Implemented, managed, and provided support for Zoho modules for the company's emails, accounting, inventory management, CRM, and social media marketing.",
            "Implemented and provided support for an online service focused on the company's customers, to enable them to process orders online, track orders and payments, make online payments, and receive notifications and news."
        ]
    },
    {
        year: '2011',
        position: 'it support specialist',
        company: 'Lenlyn Ltd.',
        description: [
            "Responsible for daily updates of the company's Point Of Sale system, so the North American currency exchange stores located at different airports and the company online service could offer the most updated, reliable, and competitive currency exchange rates.",
            "Worked on testing, implementation, and support of new features developed for the company's POS system and the online services.",
            "Administered the company's SQL Server including, but not limited to, checking for data consistency, transnational data update, management of users' access to company systems, and the update of records related to the OFAC Sanctions List.",
            "Generated periodical reports using the company's SQL Server to evaluate the business activity."
        ]
    },

]

const Working = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h4' align='center' className={classes.heading}>
                Working Experience
            </Typography>
            <Box component='div' className={classes.timeLine}>
                {experienceItems.map( (item, idx) => (
                    <JobItems job={item} key={idx} />
                ))}
            </Box>
        </>
    )
}

export default Working
