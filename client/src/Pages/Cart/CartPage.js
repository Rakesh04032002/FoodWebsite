import React from 'react';
import { Link } from 'react-router-dom';
import {useCart} from '../../Hooks/useCart';
import classes from './CartPage.module.css';
import { Title } from '../../components/Title/Title';
import Price from '../../components/Price/Price';
import { NotFound } from '../../components/NotFound/NotFound';
export const CartPage = () => {
    
    const maxQuantity = 10;
    const { cart ,removeFromCart,changeQuantity} = useCart();
  return (
    <div>
        <Title title="Cart Page" margin="1.5rem 0 0 2.5rem"/>   
        {cart.items.length ===0 ? (<NotFound message="Cart Page Is Empty" linkText="Go To Home Page & Add Food In The Cart"/>) : 
            <div className={classes.container}>
                <ul className={classes.list}>
                    {cart.items.map(item=><li key={item.food.id}>
                            <div>
                                <img src={`${item.food.imageUrl}`} alt={item.food.name}/>
                            </div>
                            <div>
                                <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                            </div>
                            <div>
                                <select value={item.quantity} onChange={(e)=>changeQuantity(item,Number(e.target.value))}>
                                    {[...Array(maxQuantity).keys()].map((value) => (
                                        <option key={value + 1} value={value + 1}>
                                            {value + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Price price={item.price}/>
                            </div>
                            <div>
                                <button className={classes.remove_button} onClick={()=>removeFromCart(item.food.id)}>Remove</button>
                            </div>
                        </li>)
                    }
                </ul>
                <div className={classes.checkout}>
                    <div>
                        <div className={classes.foods_count}>
                            {cart.totalCount}
                        </div>
                        <div className={classes.total_price}>
                            <Price price={cart.totalPrice}/>
                        </div>
                    </div>
                    <Link to="/checkout">Proceed to checkout</Link>
                </div>
            </div>
        }
    </div>
  )
}
