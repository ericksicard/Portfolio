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

const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: '#E1E2E1',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 500,
        margin: '2rem 1rem'
    }
}))

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component='div' className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='space-evenly' alignItems="baseline" spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='200' image={project1} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Maze Game
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Maze generator with three levels of complexity based on a depth-first search algorithm.
                                </Typography> <br/>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    <b>Technologies:</b> JavaScript, HTML, CSS, Canvas API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary' href='https://ericksicard.github.io/Ironhack-maze-game-project/'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='200' image={project2} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    MERN Social App
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Social media application with rudimentary features inspired by existing social media platforms such as Facebook and Twitter.
                                </Typography> <br/>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    <b>Technologies:</b> JavaScript, Node.js, Express.js, MongoDB, Mongoose, React.js, Material-UI, Webpack, Cloudinary API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary' >
                                Share
                            </Button>
                            <Button size='small' color='primary' href='https://mern-ironsocial.herokuapp.com/'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='200' image={project3} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Multi Vendor Marketplace
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Online marketplace application with features that enables users to buy and sell.
                                </Typography> <br/>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    <b>Technologies:</b> Javascript, Node.js, Express.js, MongoDB, Mongoose, React.js, Material-UI, Webpack.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size='small' color='primary'>
                                Share
                            </Button>
                            <Button size='small' color='primary' href='https://multivendor-marketplace.herokuapp.com/'>
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component='img' alt='Project 1' height='200' image={project4} />
                            <CardContent>
                                <Typography gutterBottom variant='h5'>
                                    Orlando Distributors E-Commerce
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Fully customized E-Commerce and full of functionalities for B2C, B2B, and Wholesale.
                                </Typography> <br/>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    <b>Technologies:</b> JavaScript, HTML, CSS, AmeriCommerce Platform, Shipping Easy API, Stripe API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    Share
                                </Button>
                                <Button size='small' color='primary' href='https://www.orlandodist.com/'>
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
