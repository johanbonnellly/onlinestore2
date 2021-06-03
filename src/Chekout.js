import React from 'react'
import { useStateValue } from './StateProvider'
import './Chekout.css'
import ChekoutProduct from './ChekoutProduct'
import Subtotal from './Subtotal';


function Chekout() {
    const [{ basket }] = useStateValue();
    return (
        <div className = 'checkout' >
            <div className = 'checkout__left' > 
            <img className = 'checkout__ad'  src= 'https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ' alt = '' />
         
         {basket?.length === 0 ? (
            <div>
                <h2> Your shopping basket is empty </h2>
                <p>
                     You have no items in your basket yet. 
                 </p>
            </div>

         ) : (
             <div>
                 <h2 className = 'checkout__title'>
                     Your shopping basket
                 </h2>
                 
                 {/* List out all of the checkout products */}
                 {basket.map (item => (
                     <ChekoutProduct 
                     id = {item.id} 
                     title = {item.title}
                     image = {item.image}
                     price = {item.price}
                     rating = {item.rating}
                     />
                 ))}
                 
             </div>
         ) }

        </div>
            {basket.length > 0 && (
                <div  className = 'checkout__right'> 
                <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Chekout
