import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import useStyles from './style';

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} tittle={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom >
                    {product.name}
                </Typography>
                <Typography variant='h5' gutterBottom >
                    {product.price}
                </Typography>
                <Typography variant='body2'>{product.description}</Typography>
            </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add to Cart'>
                <AddShoppingCart/>
            </IconButton>
            
        </CardActions>
    </Card>
  )
}

export default Product