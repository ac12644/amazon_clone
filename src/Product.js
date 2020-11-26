import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider";


function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            }
        })
    };


    return (
        <div className= "product">
            <div className="product_details">
            <p>{title}</p>
            <p className="cost">
            <strong>{price}</strong>
                <small>€</small> 
                </p>

            <div className="rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <span>⭐</span>

                    ))}
                    
                </div> 
                

            </div>
            
            
            <img src={image} alt=""/> 
            <button onClick={addToBasket}>Add to basket</button> 

                 

                
        </div>
    
    );  
}

export default Product;
