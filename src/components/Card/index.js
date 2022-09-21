import React from 'react';
import AppContext from '../../context';
import style from './Card.module.scss';
import ContentLoader from "react-content-loader";


function Card({loading=false, id,onFavorite,onPlus,name,imageUrl,price,favorited=false}) {

    const {isItemAdded}= React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
       onPlus({name,imageUrl,id,price});
       
    }
    const onClickFavorite = () => {
        onFavorite({id,name,imageUrl,price});
        setIsFavorite(!isFavorite);
    }


    return (
        <div className={style.card}>   
            {loading ?(<ContentLoader 
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>):

            (<>
            {onFavorite&&<img style={{position: 'absolute', cursor: 'pointer'}}
            onClick={onClickFavorite}src={isFavorite 
            ? "/img/heart-liked.svg": "/img/heart-unliked.svg"}/>}
            <img width={133} height={122} className="item-img" src={imageUrl}/>
            <h5>{name}</h5>
            <div className={style.cardbutton}>
                <div className={style.cardprice}>
                    <span>price:</span>
                    <b>{price}$</b>
                </div>
                {onPlus&&<img className={style.addbutton}
                 onClick={()=>onClickPlus(id)}src={isItemAdded(id) 
                 ? "/img/added.svg": "/img/plus.svg"}/>}
            </div>
            </>)

            }

        </div>

    );
}

export default Card;

