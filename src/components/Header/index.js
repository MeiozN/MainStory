import { Link} from 'react-router-dom';
import React from 'react';
import AppContext from '../../context';
function Header(props) {
    const{cartItems}=React.useContext(AppContext)
    const cartPrice=cartItems.reduce((sum,obj)=>sum+obj.price,0)
   
    return (
        <header >
            <Link to ="/">
            <div className="headerLeft">
                <img height={68} width={68} src="/img/logo.png"/>
                <div className="headerInfo">
                    <h3>outlet</h3>
                </div>
            </div></Link>
            <ul className="headerRight">
                <li onClick={props.onClickCart} style={{cursor: "pointer"}}>
                    <img height={20} width={20} src="/img/cart.svg"/>
                    <span>{cartPrice}$</span>   
                </li>
               <Link to ="/favorites"> <li><img height={20} width={20} src="/img/favorite.svg"/></li></Link>
               <Link to ="/orders"> <li><img height={20} width={20} src="/img/profile.svg"/></li></Link>
            </ul>
        </header>

    );
}

export default Header;
