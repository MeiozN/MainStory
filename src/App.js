import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/index.js';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Drawer from './components/Drawer/index.js';
import AppContext from './context';
import Orders from './pages/Orders.jsx';


function App() {
  const[cartItems,setCartItems]=React.useState([]);
  const[favorite,setFavorite]=React.useState([]);
  const[items,setItems]=React.useState([]);
  const[searchValue,setSearchValue]=React.useState('');
  const[cartOpened,setCartOpened]=React.useState(false);
  const[isLoading,setIsLoading]=React.useState(true);

  React.useEffect(()=>{

  async function fetchData(){
    setIsLoading(true);
    const cartResponse= await axios.get('https://62bc95edeff39ad5ee284fd2.mockapi.io/cart');
    const favoritesResponse= await axios.get('https://62bc95edeff39ad5ee284fd2.mockapi.io/favorite');
    const itemsResponse= await axios.get('https://62bc95edeff39ad5ee284fd2.mockapi.io/items');
      
    

    setIsLoading(false);
    setCartItems(cartResponse.data);
    setFavorite(favoritesResponse.data);
    
    setItems(itemsResponse.data); 

  }
  fetchData();
},[]);


  const onAddToCart = (obj)=>{
try {
  if(cartItems.find(item=>Number(item.id) === Number(obj.id))){
  axios.delete(`https://62bc95edeff39ad5ee284fd2.mockapi.io/cart/${obj.id}`);
    setCartItems(prev=>prev.filter(item=>Number(item.id) !== Number(obj.id)));

    
  } else {
    axios.post('https://62bc95edeff39ad5ee284fd2.mockapi.io/cart',obj);
    setCartItems(prev=>[...prev,obj]);
   
  }  

} catch (error) {
  alert("item was not added to cart")
}
  };

  const onRemoveItem=(id)=>{  
      try {
    axios.delete(`https://62bc95edeff39ad5ee284fd2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  } catch (error) {
    alert('error cant delete item:');
    console.error(error);
  }}

  const onAddToFavorite=async(obj)=>{
try {
  if(favorite.find(favObj=>Number(favObj.id) === Number( obj.id )))
  {
    axios.delete(`https://62bc95edeff39ad5ee284fd2.mockapi.io/favorite/${obj.id}`);
    setFavorite(prev=>prev.filter(item=>Number(item.id) !== Number(obj.id)))
  }else{
      const{data} = await axios.post('https://62bc95edeff39ad5ee284fd2.mockapi.io/favorite',obj);
    setFavorite(prev=>[...prev,data]);
    console.log("saa")
    };
} catch (error) {
  alert('cant add to favorite')
}
    }
  const onChangeSearchInput=(event)=>{

    setSearchValue(event.target.value);
    
  }

  const onchageitemtype=(event)=>{
 
  }
  
   const isItemAdded=(id)=>{
   return cartItems.some((obj)=> Number(obj.id)=== Number(id))
  }

  return (
<AppContext.Provider value={{setCartItems,cartItems,items,favorite, isItemAdded,setCartOpened}}>
<div className="wrapper">

{cartOpened && <Drawer  items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem} />}
<Header onClickCart={()=>setCartOpened(true)} />
<Routes>
                 

<Route exact path="/"
   element={
<Home 
cartItems={cartItems} 
searchValue={searchValue} 
setSearchValue={setSearchValue}  
onChangeSearchInput={onChangeSearchInput} 
items={items}  
onAddToCart={onAddToCart}
onAddToFavorite={onAddToFavorite}
isLoading={isLoading}
 /> } 
/>   

<Route exact path="/favorites" 
 element={<Favorites items={favorite}
onAddToFavorite={onAddToFavorite}/>} />
<Route exact path="/orders"
element={<Orders/>}></Route>

</Routes>

</div> 

</AppContext.Provider>
  )
}
export default App;

