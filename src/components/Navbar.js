import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    Avatar,
    Divider,
    Typography,
    Box
} from '@material-ui/core'
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../profile-picture.jpg'
import Footer from './Footer'

//CSS STYLES
const useStyles = makeStyles( theme => ({
    navBar: {
        background: '#002984'
    },
    menuSliderContainer: {
        width: 300,
        height: '100%',
        background: '#3f51b5'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: '#ffffff'
    }
}))

// SIDE MENU ITEMS ARRAY
const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts',
        listPath: '/contacts'
    },
]

const Navbar = () => {
    const classes = useStyles()
    const [state, setState] = useState(false)

    const toggleSlider = open => {
        setState(open)
    }

    const sideList = () => (
        <Box 
        component='div'
        className={classes.menuSliderContainer}
        onClick={ event => toggleSlider(false) }
        >
            <Avatar className={classes.avatar} src={avatar} alt='Erick Sicard profile avatar' />
            <Divider />
            <List>
                {
                    menuItems.map( (item, key) => (
                        <ListItem button key={key} component={Link} to={item.listPath}>
                            <ListItemIcon className={classes.listItem}>{ item.listIcon }</ListItemIcon>
                            <ListItemText className={classes.listItem} primary={item.listText} />
                        </ListItem>                        
                    ))
                }
            </List>
        </Box>
    )

    return (
        <>
        <Box component='nav'>
            <AppBar position='static' >
                <Toolbar className={classes.navBar}>
                    <IconButton onClick={ event => toggleSlider(true) }>
                        <ArrowBack style={{ color: '#ffffff' }} />
                    </IconButton>
                    <Typography variant='h5'>
                        Portfolio
                    </Typography>
                    <Drawer 
                    anchor='right'
                    open={state}
                    onClose={ event => toggleSlider(false) }
                    >
                        { sideList() }
                        <Footer />
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
