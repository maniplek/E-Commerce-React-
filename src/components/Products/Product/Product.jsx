import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

import useStyles from './style';

const Product = ({product}) => {
    const classes = useStyles();
// console.log(product)
// return <div>test</div>
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} tittle={product.name}/>
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant='h5' gutterBottom >
                    {product.name}
                </Typography>
                <Typography variant='h5' gutterBottom >
                    {product.price.formatted_with_symbol}
                </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2'/>
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