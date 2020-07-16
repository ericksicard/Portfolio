import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import EducationItems from './EducationItems'

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

const education = [
    {
        year: '2020',
        level: "Bootcamp Program:  ",
        major: 'Full-Stack Web Development',
        company: 'Ironhack Miami',
        description: ["Ironhack is an immersive Bootcamp with locations all over the globe, offering 9-week courses in Full Stack Web Development and UX/UI Design. (400+ hours)."],
        technologies: "JavaScript, ReactJS, NodeJS, ExpressJS, Handlebars, MongoDB, Mongoose, HTML and CSS."
    },
    {
        year: '2018',
        level: "Nanodegree Program: ",
        major: 'Front-End Web Development',
        company: 'Udacity',
        description: ["Responsive websites using CSS, Flexbox and CSS Grid, interactive websites and User Interface applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript."],
        technologies: "JavaScript, ReactJS, Sass, Gulp, Git/GitHub, HTML and CSS."
    },
    {
        year: '2013',
        level: "College Credit Certificate Program: ",
        major: 'Computer Programming',
        company: 'Miami Dade College',
        description: [
            "Introduction To Microcomputer Usage(CGS 1060)",
            "Introduction To Visual Basic Programming(COP 1332)",
            "Introduction To C++ Programming(COP 1334)"
        ],
        technologies: "Visual Basic, C++"
    },
    {
        year: '2005',
        level: "Bachelor of Science: ",
        major: 'Industrial Engineering',
        company: 'Universidad Tecnologica De La Habana',
        description: [
            "Business Process Improvement, Systems Analysis & Engineering, Project Management, Industrial Engineering & Design."
        ],
        technologies: ""
    }  
]

const Education = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant='h4' align='center' className={classes.heading}>
                Education
            </Typography>
            <Box component='div' className={classes.timeLine}>
                {education.map( (item, idx) => (
                    <EducationItems education={item} key={idx} />
                ))}
            </Box>
        </>
    )
}

export default Education
