import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';
import Payment from "./Payment";

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();


    return (
        <div className="subtotal">
            
               
            <CurrencyFormat 
          renderText={(value) => (
              <>
              <p>
                  Subtotal ({basket.length} items):<strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox"/>This order contains a gift
              </small>
              </>
          )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"€"}
         />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
