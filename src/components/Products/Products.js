import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product/Product";

import useStyles from './styles';

const products = [
    {id:1, name: 'JORDAN', description: 'JORDAN SHOES', price:'$30', image:'https://cdn.snkrdunk.com/uploads/media/20220515065850-1.jpeg'},
    {id:2, name: 'AIR JORDAN 13', description: 'JORDAN SHOES', price:'$30', image:'https://res.cloudinary.com/shelflife-cloud/image/upload/if_w_gt_1392,w_1392,q_auto:eco/v1575961299/editoruploads/air-jordan-13-retro-dmp-bg-2.jpg'},
    {id:3, name: 'AIR JORDAN 1 ', description: 'Air Jordan 1 Mid Linen White', price:'$30', image:'https://sneakernews.com/wp-content/uploads/2021/07/air-jordan-1-mid-linen-white-554724-082-4.jpg'},
    {id:4, name: 'CHELSEA BOOTS', description: 'BOOTS', price:'$30', image:'https://asset1.cxnmarksandspencer.com/is/image/mands/Wide-Fit-Leather-Chelsea-Ankle-Boots-2/SD_01_T02_6385W_Y0_X_EC_90?$PDP_IMAGEGRID_1_LG$'},
    {id:5, name: 'ADIDAS YEEZY', description: 'YEEZY BOOST 700', price:'$30', image:'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Inertia-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606323708'},
    {id:6, name: 'AIR JORDAN 6', description: 'JORDAN 6 TRAVIS SCOTT', price:'$30', image:'https://images.complex.com/complex/images/c_crop,h_1052,w_1871,x_65,y_564/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/xzebj5p9ilvdtgpnnig2/travis-scott-air-jordan-6-british-khaki-dh0690-200-pair?fimg-ssr-default'},
    {id:7, name: 'AIR JORDAN 1', description: 'Bald erscheint der Travis Scott x Nike Air Jordan 1 Low Reverse Mocha', price:'$30', image:'https://wa.snkraddicted.com/wp-content/uploads/2021/11/travis-scott-x-nike-air-jordan-1-low-reverse-mocha_0004_web.jpg'},
    {id:8, name: 'NIKE JORDAN', description: 'JORDAN 11', price:'$30', image:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fair-jordan-11-cherry-CT8012-116-release-info-1.jpg?q=75&w=800&cbr=1&fit=max'},
    {id:7, name: 'AIR JORDAN 7', description: 'JORDN 7 shimmer', price:'$30', image:'https://sneakernews.com/wp-content/uploads/2022/03/air-jordan-7-shimmer-black-sapphire-DJ2636-204-3.jpg?w=1140'},
    {id:8, name: 'NIKE JORDAN', description: 'JORDAN 11', price:'$30', image:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fair-jordan-11-cherry-CT8012-116-release-info-1.jpg?q=75&w=800&cbr=1&fit=max'},

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