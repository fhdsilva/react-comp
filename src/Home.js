import React from "react";
import './Home.css';
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
           
           
        <div className="home_row">
          
            <Product
                id='098' 
                title='The lean startup'
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={3}
                />
                
         <Product/>
         
         <Product
            id='890'
            title='Kenwood kMix Stand Mixer for'
            price={230.96}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            />
        </div>

        
        <div className="home_row">
            <Product
                id='123'
                title='Samsung LC'
                price={1094.98}
                rating={4}
                image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                            />
            <Product/>
            <Product/>
            <Product/>
        </div>


           
            </div>
        </div>
    )
}

export default Home;