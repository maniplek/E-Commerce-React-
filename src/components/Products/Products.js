import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

import useStyles from './styles';

const products = [
    {id:1, name: 'Shoes', description: 'JORDAN SHOES', price:'$30', image:'https://cdn.snkrdunk.com/uploads/media/20220515065850-1.jpeg'},
    {id:2, name: 'Macbook', description: 'Apple macbook M2', price: '$1500', image:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202208041811'},
    {id:1, name: 'Shoes', description: 'JORDAN SHOES', price:'$30', image:'https://cdn.snkrdunk.com/uploads/media/20220515065850-1.jpeg'},
    {id:2, name: 'Macbook', description: 'Apple macbook M2', price: '$1500', image:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202208041811'},
    {id:1, name: 'Shoes', description: 'JORDAN SHOES', price:'$30', image:'https://cdn.snkrdunk.com/uploads/media/20220515065850-1.jpeg'},
    {id:2, name: 'Macbook', description: 'Apple macbook M2', price: '$1500', image:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202208041811'},
    {id:1, name: 'Shoes', description: 'JORDAN SHOES', price:'$30', image:'https://cdn.snkrdunk.com/uploads/media/20220515065850-1.jpeg'},
    {id:2, name: 'Macbook', description: 'Apple macbook M2', price: '$1500', image:'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021.jpg.og.jpg?202208041811'},
]

const Products = () =>{
    const classes = useStyles();
    return(
         <main className={classes.content}>
            <div className={classes.toolbar}/>
        <Grid container justify='center' spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))

            }
        </Grid>
    </main>
    )
   
}

export default Products