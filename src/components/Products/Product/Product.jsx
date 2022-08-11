import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import useStyles from './style';

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' tittle={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom >
                    {product.name}
                </Typography>
                <Typography variant='h5' gutterBottom >
                    {product.price}
                </Typography>
                <Typography variant='h2'>{product.description}</Typography>
            </div>
        </CardContent>
        <CardActions aria-label='Add to Cart'>
            <AddShoppingCart/>
        </CardActions>
    </Card>
  )
}

export default Product