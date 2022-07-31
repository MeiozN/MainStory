



function Drawer ({onRemove,onClose, items=[]}){
return(
  <div>
    <div className='drawershadow'>
    <div className='drawerblock'>
     <div className="close">
       <h2>კალათა</h2>
       <img onClick={onClose} src="/img/btnremove.svg" alt="remove"/></div>
       {
         items.length > 0 ?
         <div className="drawercontent" >
          <div className="addeditems">
      
         {items.map((obj)=>(
            <div  key={obj.id} className="cartadded">
            <div className="addedimg"
          style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>
          <div className="addeditemtext">
            <p> {obj.name}</p>
            <b>{obj.price}ლ</b>
          </div>
          <img onClick={()=>onRemove(obj.id)} className="addedremove" src="/img/btnremove.svg" alt="remove"/>
         </div>
         ))
       }
         </div>
         <div>
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
         <img alt="shekveta" src="/img/right.svg"/>
        </button>    
         </div>
         </div>
         </div>:
         <div className="cartEmpty">
      <img className="cartempty" src="/img/empty-cart.jpg" alt="Empty" />
      <h2>კალათა ცარიელია</h2>
      <p className="opacity-6">დაამატეთ თუნდაც 1 ნივთი</p>
      <div className="placeorder">
        <button onClick={onClose}><span>უკან დაბრუნება</span>
        </button>    
         </div>
    </div>
        
       }
 
     </div>
     </div>
    </div>
);
}
export default Drawer;