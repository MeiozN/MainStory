function Card() {
    return (
<div className="card">
<div className="favorite">
<img src="/img/heart-unliked.svg"alt="unliked"/>
</div>
 <img width={133} height={122} className="item-img" src="/img/item.jpg"alt="items"/>
 <h5>nike jordanebi dzma</h5>
   <div className="card-button">
     <div className="card-price">
     <span>ფასი:</span>
     <b>100ლ</b>
   </div>
   <button className="add-button">
     <img src="/img/plus.svg"/>
   </button>
   </div>
</div>

);
}

export default Card;
