import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

import { Typography, Paper, Grid, Icon, IconButton } from '@material-ui/core'



const useStyles = makeStyles( theme => ({
    header: {
        textAlign: 'center'
    },
    cartContainer: {
        // display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(6),
    },
    cartItem: {
        width: '70%',
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto',
        marginTop: theme.spacing(2),
    },
    pic: {
        height: '100px',
    },
    itemInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    itemInfoButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }
}))

const Cart = () => {

    const classes = useStyles();
    const {cart, updateCart} = useContext(CartContext)

    console.log(cart);

    let EmptyCartComponent = <Paper elevation={3} className={classes.cartItem}  >
        <Typography>Your Cart is empty</Typography>
        <Typography>Start Shopping!</Typography>
        </Paper>
    
    let CartMap = cart.map( (item, index) => {
        return(
            <Paper evelation={3} key={index} className={classes.cartItem} > 
                <Grid container >
                    <Grid item xs={3} >
                        <img className={classes.pic} src={item.img} />
                    </Grid>
                    <Grid item xs={9} className={classes.itemInfo} >
                        <Typography>{item.name}</Typography>
                        <div className={classes.itemInfoButtons} >
                            <Typography variant="caption" >Quantity: 1</Typography>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </div>

                    </Grid>
                </Grid>
            </Paper>
        )
    } )
    
    let UserCart = cart.length > 0 ? CartMap : EmptyCartComponent

    return(
        <div>
            <Typography className={classes.header} component="h3" >My Cart</Typography>
            <div className={classes.cartContainer}>
                {UserCart}
            </div>
        </div>
    )
}


export default Cart