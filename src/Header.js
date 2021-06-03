import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import Login from './Login';
import { auth } from './firebase';


function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);

    return (
        <nav className = 'header'>
            {/* Logo on the left  */}
            <Link to = '/'>
            <img className= 'header__logo' src = 'https://img2.freepng.es/20180128/ojw/kisspng-logo-shopping-shopping-logo-design-5a6db6532c7f63.6926652415171395391823.jpg' alt = '' />
            </Link>
            {/* Searh box  */}

            <div className = "header__search">
            <input type = 'text' placeholder= "Search..." className = 'header__searchInput' />
            <SearchIcon className = 'header__searchIcon' />
            </div>

            {/* 3 links  */}
            <div  className = "header__nav">
              {/* 1st link  */}
               <Link to = {!user && '/LogIn'} className = "header__link">
               <div onClick = {login} className = "header__option">
                   <span className = "header__optionLineOne" > Hello {user?.email} </span>
                   <span className = "header__optionLineTwo" > {user ? 'Sign Out' : 'Sign in'} </span>
               </div>
               </Link>

              
              {/* 4th link  */}
             <Link to = '/checkout' className = "header__link">
              <div className = "header__optionBasket">
                  {/*Shopping Basket Icon */}
                  <ShoppingBasketIcon />
                  {/*Number of items in the basket */}
                  <span className = "header__optionLineTwo header__baskerCount" > {basket?.length} </span>

              </div>
             </Link> 
             

            </div>

            {/* Basquet icon with number  */}
        </nav>
    )
}

export default Header
