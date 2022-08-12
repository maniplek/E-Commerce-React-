import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/djtable.jpg'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
  return (
    <>
    <AppBar position='fixed' className={classes.AppBar}color='inherit'>
        <Toolbar>
            <Typography variant='h6' className={classes.tittle} color='inherit'>
                <img src={logo} alt='NIHE' height='25px' className={classes.image}  />
                NIHE
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button} >
                <IconButton aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent={2} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>

        </Toolbar>
    </AppBar>
        
    </>
  )
}

export default Navbar