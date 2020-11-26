import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



    


    return (
    <nav className ="header">
        <Link to ="/">
        <img className="logo" src ="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt ="amazon_logo" />
        </Link>

        <div className="search_box">
        <input type ="text" className ="search_input" />
        <SearchIcon className="search_icon"/>
        </div>

        <div className="nav_links">
            <Link to={!user &&"/login"} className= "links">
                <div  className="link_down">
                 <span className="line1">Hello </span>
                 <span className= "line2"></span>

                </div>
            
            </Link>
           

           
                
        </div>
        
            
        </nav>
    )
}

export default Header
