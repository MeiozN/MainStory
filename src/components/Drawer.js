function Drawer (){
return(
    <div style={{display:"none"}} className="cartall">
    <div className="drawershadow">
    <div className="drawer-block">
     <div className="close">
       <h2>კალათა</h2>
     <img src="/img/btnremove.svg" alt="remove"/></div>
     <div className="addeditems">
     <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
      <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
      <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
      <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
      <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
      <div className="cartadded">
       <div className="addedimg"
       style={{ backgroundImage: `url("/img/item.jpg")` }}></div>
       <div className="addeditemtext">
         <p> damatebuli gaq simpn aris dzma</p>
         <b>100ლ</b>
       </div>
       <img className="addedremove" src="/img/btnremove.svg" alt="remove"/>
      </div>
     </div>
     <ul className="order"> 
       <li>
         <span>მთლიანი ღირებულება:</span>
         <div></div>
         <b>300ლ</b>
       </li>
       <li>
         <span>ფასდაკლება:</span>
         <div></div>
         <b>100ლ</b>
       </li>
   
     </ul>
     <div className="placeorder">
        <button><span>შეკვეთა</span>
         <img src="/img/right.svg"/>
        </button>
     </div>
     </div>
    </div>
    </div>
);
}
export default Drawer;