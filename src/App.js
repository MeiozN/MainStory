import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/index.js';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Drawer from './components/Drawer/index.js';
 



function App() {
  const[cartItems,setCartItems]=React.useState([]);
  const[Favorite,setFavorite]=React.useState([]);
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
  axios.delete('https://62bc95edeff39ad5ee284fd2.mockapi.io/cart',obj);
    setCartItems(prev=>prev.filter(item=>Number(item.id) !== Number(obj.id)));
    console.log(obj,"waishala da ar daemata");
    
  } else {
    axios.post('https://62bc95edeff39ad5ee284fd2.mockapi.io/cart',obj);
    setCartItems(prev=>[...prev,obj]);
    console.log(obj,"daemata parkshi");
  }  

} catch (error) {
  alert("ნივთი ვერ დაემატა ყუთში")
}
  };

  const onRemoveItem=(id)=>{  
      try {
    axios.delete(`https://62bc95edeff39ad5ee284fd2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  } catch (error) {
    alert('Ошибка при удалении из корзины');
    console.error(error);
  }}

  const onAddToFavorite=async(obj)=>{
try {
  if(Favorite.find(favObj=>Number(favObj.id) ===Number( obj.id))){
    axios.delete(`https://62bc95edeff39ad5ee284fd2.mockapi.io/favorite/${obj.id}`);
  
  }else{
      const{data} = await axios.post('https://62bc95edeff39ad5ee284fd2.mockapi.io/favorite',obj);
    setFavorite(prev=>[...prev,data]);
    console.log("saa")
    };
} catch (error) {
  alert('ვერ დაემატა ფავორიტებში')
}
    }
  const onChangeSearchInput=(event)=>{
    setSearchValue(event.target.value);
  }
  
  return (
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
<Route exact path="/favorites"  element={<Favorites items={Favorite} onAddToFavorite={onAddToFavorite}/>} />
</Routes>
</div> 
  )
}
export default App;

