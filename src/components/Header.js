 
 function Header() {
    return (
        <header >
        <div className="headerLeft">
         <img width={68}height={68} src="/img/logo.png"/> 
         <div className="headerInfo">
          <h3>Main Store</h3>
         </div>
        </div>
          <ul className="headerRight">
            <li><img width={20}height={20} src="/img/cart.svg"/><span> 50 ლ</span></li>
            <li><img width={20}height={20} src="/img/favorite.svg"/></li>
            <li><img width={20}height={20} src="/img/profile.svg"/></li>
          </ul>
       </header>

);
}

export default Header;
