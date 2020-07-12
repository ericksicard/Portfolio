import React, { useState } from 'react';
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

//CSS STYLES
const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#3F51B5',
        height: '100%'
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
        listText: 'Home'
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume'
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio'
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts'
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
                        <ListItem button key={key}>
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
            <AppBar position='static'>
                <Toolbar>
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
                    </Drawer>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
