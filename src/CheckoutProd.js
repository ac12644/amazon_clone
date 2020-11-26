import React from 'react'
import "./CheckoutProd.css";
import { useStateValue } from './StateProvider';

function CheckoutProd({id,title,image,price,rating}) {
  
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
                
        });
    };

    return (
        <div className="checkoutProd">
            <img className="checkoutProd_image" src={image} alt=""/>
            <div className="checkoutProd_info">
               <p className ="checkoutProd_title">{title}</p>
               <p className="checkoutProd_cost">
                  <strong>{price}</strong>
                <small>€</small> 
                </p>
            <div className="checkoutProd_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <span>⭐</span>

                    ))}
                    
                </div> 
                
                 <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProd;
