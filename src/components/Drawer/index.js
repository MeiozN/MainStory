import React from "react";
import Info from "../Info.jsx";
import AppContext from '../../context'
import axios from "axios";
const delay = (ms)=> new Promise ((resolve)=>setTimeout(resolve,ms))

function Drawer ({onRemove,onClose, items=[]}){

const{cartItems,setCartItems}=React.useContext(AppContext)
const[orderId, setOrderId] = React.useState(null);
const[isLoading,setIsLoading]=React.useState(false);
const cartPrice=cartItems.reduce((sum,obj)=>sum+obj.price,0)
const[isOrderComplate,setIsOrderComplate]=React.useState(false)

const onClickOrder = async () => {
try {
setIsLoading(true)
  const { data }= await axios.post("https://62bc95edeff39ad5ee284fd2.mockapi.io/orders",{items:cartItems,})
  

  setOrderId(data.id) 
  setIsOrderComplate(true)
  setCartItems([])

for (let i = 0; i < cartItems.length; i++) {

  const items = cartItems[i];
 await axios.delete('https://62bc95edeff39ad5ee284fd2.mockapi.io/cart/'+items.id)
 await delay(1000)

}
} catch (error) {
 console.log("error")
}
setIsLoading(false)
} 

return(
  <div>
    <div className='drawershadow'>
    <div className='drawerblock'>
     <div className="close">
       <h2>cart</h2>
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
            <b>{obj.price}$</b>
          </div>
          <img onClick={()=>onRemove(obj.id)} className="addedremove" src="/img/btnremove.svg" alt="remove"/>
         </div>
         ))
       }
         </div>
         <div>
     <ul className="order"> 
       <li>
         <span>all price:</span>
         <div></div>
         <b>{cartPrice}$</b>
       </li>
       <li>
         <span>sale:</span>
         <div></div>
         <b>{Math.round(cartPrice/100*20)}$</b>
       </li>
   
     </ul>
     <div className="placeorder">
        <button disabled={isLoading} onClick={onClickOrder}><span>Order</span>
         <img alt="shekveta" src="/img/right.svg"/>
        </button>    
         </div>
         </div>
         </div>:
         
         <Info title={isOrderComplate?"congradulations!":"cart is empty"} 
         description={isOrderComplate?`order number: ${orderId}`:"add items"}
         image={isOrderComplate?"/img/complatedorder.png":"/img/empty-cart.jpg"}/>
       }
 
     </div>
     </div>
    </div>
);
}
export default Drawer;