import React from 'react'
import { Link } from 'react-router-dom'
import Price from '../Price/Price'
import classes from './OrderItemList.module.css'

export const OrderItemList = ({ order }) => {
  // Check if order or order.items is not defined
  if (!order || !order.items) {
    return null; // or handle it in a way that makes sense for your application
  }

  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map((item) => (
          <tr key={item.food.id}>
            <td>
              <Link to={`/food/${item.food.id}`}>
                <img src={item.food.imageUrl} alt={item.food.name} />
              </Link>
            </td>
            <td>{item.food.name}</td>
            <td>
              <Price price={item.food.price} />
            </td>
            <td>{item.quantity}</td>
            <td>
              <Price price={item.price} />
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total:</strong>
          </td>
          <td>
            <Price price={order.totalPrice} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
