import React from 'react';
import Product from "./Product";
import "./Home.css";





function Home() {
    return (
      
        
          <div className="home">
            
               <img className="banner"
                src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_it-IT._CB406827119_.jpg" alt="" />

            
              <div className="home_row">
              <Product
              id="12345"
              title="Apple iPhone 11 Pro Max (64GB) - Silver"
              price={1100.09}
              rating={5}
              image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132"
              />

              <Product
              id="123435"
              title="Samsung Galaxy S10 (Prism Blue, 8GB RAM, 128GB Storage)"
              price={575.05}
              rating={4}
              image="https://images-eu.ssl-images-amazon.com/images/I/31inxN86KRL._AC_US320_FMwebp_QL65_.jpg"
              />   

              <Product
              id="12343456"
              title="Apple iPad Pro 11 Wi-Fi (128GB) - Space Gray"
              price={870.28}
              rating={5}
              image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY436_FMwebp_QL65_.jpg"
              />
              </div>

              <div className="home_row">
              <Product
              id="12344543256"
              title="Bose SoundLink Revolve, Portable Bluetooth Speaker (with 360 Wireless Surround Sound), Triple Black"
              price={159.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/61iKlY+DNYL._AC_UL640_FMwebp_QL65_.jpg"
              />
              <Product
              id="1234454256"
              title="The Theory of Everything by Stephen Hawking "
              price={10}
              rating={5}
              image="https://m.media-amazon.com/images/I/51oHUvYzbsL._AC_UY436_FMwebp_QL65_.jpg"
              />
              <Product
              id="12346454356"
              title="Kindle (10th Gen), 6inch Display with Built-in Light,WiFi (Black)"
              price={89.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/51BSpwyEckL._AC_UL640_FMwebp_QL65_.jpg"
              />
              </div>

              <div className="home_row">
              <Product 
               id="32949249"
               title="ASUS ROG STRIX XG49VQ 49inch Curvo DFHD (3840 x 1440) Gaming Monitor, VA, 144 Hz, 125 % sRGB, DP, HDMI, USB 3.0, FreeSync 2 HDR, DisplayHDR400, AuraSync"
               price={980.00}
               rating={5}
               image="https://m.media-amazon.com/images/I/81DdO0keDTL._AC_UL640_FMwebp_QL65_.jpg"
              />
              <Product 
               id="32729109"
               title="Apple Core i5 (7th Gen) (8 GB DDR4/1 TB/Mac OS X Sierra/8 GB/27 Inch Screen/A1419)  (White, 516 mm x 650 mm x 203 mm, 9.44 kg)"
               price={1449.00}
               rating={5}
               image="https://m.media-amazon.com/images/I/51WqYDg2pSL._AC_UL640_FMwebp_QL65_.jpg"
              />

              </div>
              
              
                 <img className="footer_banner" src="https://images-eu.ssl-images-amazon.com/images/G/29/amazonservices/seller_success_stories/2020/07_hiring-process/Editorial-hiring-1x._CB408058359_.jpg"/>
           
         
              

            
               

            </div>
            
           

    );
}

export default Home;
