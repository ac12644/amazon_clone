import React, {useEffect} from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import  Checkout from './Checkout';
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders.js";


const promise = loadStripe('pk_test_Er4DGVlFItpLO8nYDEIa5yVg');

function App() {
  const [ dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
return () =>{
  unsubscribe();
}

  }, []);
  
  return (
    <Router>
      <div className="app">
      <Switch>
      <Route path ="/orders">
          <Orders />
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
          
        </Route>
        <Route path ="/payment">
          <Header/>
          <Elements stripe={promise}>
             <Payment/>
           </Elements>
        </Route>

        <Route path ="/login">
          <Login />
          
        </Route>
        <Route path ="/">
          <Header />
          <Home />
          
        </Route>
      </Switch>

     
      
      
    </div>

    </Router>
    
  );
}

export default App;
