import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Grid
 } from '@material-ui/core';
import project1 from '../maze.png'
import project2 from '../socialMediaApp.jpg'
import project3 from '../multivendor-marketplace.png'
import project4 from '../OrlandoDist.PNG'

const useStyles = makeStyles({
    mainContainer: {
        background: '#233',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem',
        margin: '5rem auto'
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center'>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='140' image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 1
                                </Typography>
                                <Typography variant='body1' style={{ color: '#f44336'}}>
                                    Maze Game
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Maze generator with three levels of complexity based on a depth-first search algorithm.<br/>
                                    <b>Technologies:</b> JavaScript, HTML, CSS, Canvas API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='140' image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 2
                                </Typography>
                                <Typography variant='body1' style={{ color: '#f44336'}}>
                                    MERN Social App
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Social media application with rudimentary features inspired by existing social media platforms such as Facebook and Twitter.<br/>
                                    <b>Technologies:</b> JavaScript, Node.js, Express.js, MongoDB, Mongoose, React.js, Material-UI, Webpack, Cloudinary API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='140' image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 3
                                </Typography>
                                <Typography variant='body1' style={{ color: '#f44336'}}>
                                    Multi Vendor Marketplace
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Online marketplace application with features that enables users to buy and sell.<br/>
                                    <b>Technologies:</b> Javascript, Node.js, Express.js, MongoDB, Mongoose, React.js, Material-UI, Webpack.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='140' image={project4} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Project 4
                                </Typography>
                                <Typography variant='body1' style={{ color: '#f44336'}}>
                                Orlando Distributors E-Commerce
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Fully customized E-Commerce and full of functionalities for B2C, B2B, and Wholesale.<br/>
                                    <b>Technologies:</b> JavaScript, HTML, CSS, AmeriCommerce Platform, Shipping Easy API, Stripe API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary'>
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio
