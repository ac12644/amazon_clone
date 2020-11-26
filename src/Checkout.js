import React from 'react'
import {useStateValue} from "./StateProvider";
import "./Checkout.css";
import CheckoutProd from "./CheckoutProd";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
             <div className="checkout_left">
           <a href="https://www.amazon.co.uk/gp/cobrandcard/marketing.html?pr=oceanthink&inc=oceanthink&ts=hit01m5ceb2hcyumbupwiobjvx4w9z&plattr=nomath&place=vc&imp=09fd2565-73b6-4110-906b-b1b4872ea7be" >
           <img className="ad"
              src="./ad.png" alt="" />
           </a>
         
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty.</h2>
                    <p>Your shopping cart is empty. To add items to your cart, navigate to Amazon.it, when you find an item that interests you, click on "Add to cart".<br/>
Continue shopping on the Amazon.co.uk website , discover our Offers section or visit your Wish List .</p>
                    
                </div>
            ) : (
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="title">Shopping Cart</h2>
                    {basket?.map((item) => (
                        <CheckoutProd
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} 
                        />
                       
                    ))}
                    </div>
            ) }
        </div>
        {basket.length > 0 && (
               <div className="checkout__right">
                
                    <Subtotal />
               </div>
         )}
        </div>
    )
}

export default Checkout
