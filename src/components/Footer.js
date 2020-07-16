import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root': {
            fill: 'white',
            '&:hover': {
                fill: '#f44336',
                fontSize: '1.8rem'
            }
        }
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width='auto' style={{ background: '#002984'}}>
            
                <BottomNavigationAction
                className={classes.root} 
                style={{ padding: 0 }}
                icon={ <LinkedInIcon /> }
                component={Button}
                href='https://www.linkedin.com/in/ericksicard/'
                />
           
            
                <BottomNavigationAction
                className={classes.root} 
                style={{ padding: 0 }}
                icon={ <GitHubIcon /> }
                component={Button}
                href='https://github.com/ericksicard'
                />
            
            
                <BottomNavigationAction
                className={classes.root} 
                style={{ padding: 0 }}
                icon={ <TwitterIcon /> }
                component={Button}
                href='https://twitter.com/erick_sicard'
                />
            
        </BottomNavigation>
    )
}

export default Footer
