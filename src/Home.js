import React from 'react'
import './Home.css'
import Product from './Product'
import { useState } from 'react'

function Home() {
    return (
        <div className= "home">
            <img  className= "home__image"
          src = 'https://www.monsterinsights.com/wp-content/uploads/2019/11/breathtaking-online-shopping-statistics-you-never-knew.png' alt = '' />
          {/* Product id, title, price, rating, image */}
          
          const productArr =  [
         <div className= "home__row" >
         <Product 
         id= '1234'
         title= 'Book Series 1'
         price = {11.96}
         rating = {5}
         image= 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105'

         />

         <Product 
         id= '1235'
         title= 'PS5'
         price = {400.00}
         rating = {5}
         image= 'https://www.muycomputer.com/wp-content/uploads/2020/10/Sony-PS5-pre-venta-aumento-demanda-e1603881786569.jpg'

         />
      </div>

      <div className= "home__row">
      <Product 
         id= '1236'
         title= 'Xbox Series X'
         price = {400.00}
         rating = {5}
         image= 'https://compass-ssl.xbox.com/assets/b9/0a/b90ad58f-9950-44a7-87fa-1ee8f0b6a90e.jpg?n=XSX_Page-Hero-0_768x792.jpg'

         />
         <Product 
         id= '1237'
         title= 'Air Fryier'
         price = {76.50}
         rating = {5}
         image= 'https://www.target.com.au/medias/static_content/product/images/full/77/63/A1227763.jpg?impolicy=product_portrait_hero'

         />
         <Product 
         id= '1238'
         title= 'Polo Shirt'
         price = {96.75}
         rating = {5}
         image= 'https://afosto-cdn-01.afosto.com/bxcsv/product/4206967217-polo-blauw-voorkant.jpg'

         />

      </div>
      <div className= "home__row">

      <Product 
         id= '1239'
         title= 'Makeup Kit'
         price = {23.15}
         rating = {5}
         image= 'https://images-na.ssl-images-amazon.com/images/I/811RumvuseL._AC_SL1500_.jpg'

         />

      </div>
      
      


        </div>
    )
}

export default Home
