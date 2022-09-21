import React from 'react'
import AppContext from '../context'

const Info = ({image,title,description}) => {
   const{setCartOpened}=React.useContext(AppContext)

  return (
    <div className="cartEmpty">
    <img className="cartempty" src={image} alt="Empty" />
    <h2>{title}</h2>
    <p className="opacity-6">{description}</p>
    <div className="placeorder">
      <button onClick={()=>setCartOpened(false)}><span>Go back</span>
      </button>    
       </div>
  </div>
  )
}
export default Info;