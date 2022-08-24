import React from 'react';
import './Header.css';
import  SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket  from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

    <div className='header_search'>
            <input className='header_searchInput' type='text'/>
       <SearchIcon className='header_searchIcon'/>
    </div>  
    
    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>Bem Vindo!</span>
            <span className='header_optionLineTwo'>Sign</span>
    </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>terceiro</span>
            <span className='header_optionLineTwo'>Orders</span>
         </div>
  
        <div className='header_option'>
            <span className='header_optionLineOne'>quarta</span>
            <span className='header_optionLineTwo'>quarta</span>
        </div>
  
<div className='header__optionBasket'>
    <ShoppingBasket />
    <span className='header__optionLineTwo header__basketCount'>0</span>

</div>



     </div>
    </div>
  )
}

export default Header;
