import { Link} from 'react-router-dom';
function Header(props) {
    return (
        <header >
            <Link to ="/">
            <div className="headerLeft">
                <img height={68} width={68} src="/img/logo.png"/>
                <div className="headerInfo">
                    <h3>Zaza story online</h3>
                </div>
            </div></Link>
            <ul className="headerRight">
                <li onClick={props.onClickCart} style={{cursor: "pointer"}}>
                    <img height={20} width={20} src="/img/cart.svg"/>
                    <span>50 ლ</span>   
                </li>
               <Link to ="/favorites"> <li><img height={20} width={20} src="/img/favorite.svg"/></li></Link>
                <li><img height={20} width={20} src="/img/profile.svg"/></li>
            </ul>
        </header>

    );
}

export default Header;
