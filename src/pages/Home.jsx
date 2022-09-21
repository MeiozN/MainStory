import Card from '../components/Card';
import styles from './Home.module.scss';
import React from 'react';
function Home({
  cartItems,
  searchValue,
  isLoading,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  onAddToFavorite
}){
  const[itemTypeChanger,setItemTypeChanger]=React.useState(false);
  const[typeNumber,setTimeNumber]=React.useState([])
  const womanItems=()=> { 
    setItemTypeChanger(!itemTypeChanger)
    setTimeNumber(1)
  }
  const manItems=()=> {
    setItemTypeChanger(!itemTypeChanger)
    setTimeNumber(2)
  }
  const childItems=()=> {
    setItemTypeChanger(!itemTypeChanger)
    setTimeNumber(3)
  }

 
  console.log(itemTypeChanger)
  const renderItems=()=>{ 
    const filtredItems=items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())
    &&item.itemtype=== typeNumber)
    const filtredItemstype=items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
  
    return (isLoading ? [...Array(8)] :(itemTypeChanger? filtredItems:filtredItemstype)).map((item,index)=>(          
      <Card 
      key={index}
      onPlus={(obj)=>onAddToCart(obj)}
      onFavorite={(obj)=>onAddToFavorite(obj)}
      added
      loading={isLoading}
      {...item}
        />

      ))
   }
  
  return(
        <div className="content">
          <div className={styles.categorysbox}>
          <ul>
            <li onClick={womanItems} className={styles.categorys}>{itemTypeChanger?"":"woman"}</li>
            <li onClick={manItems} className={styles.categorys}>{itemTypeChanger?"all":"man"}</li>
            <li onClick={childItems} className={styles.categorys}>{itemTypeChanger?"":"chils"}</li>
          </ul>
        </div>
        <div className="content-header">
        <h1>{searchValue? `search result:${searchValue}`: 'All items'}</h1>
        <div className="search-box">
          {searchValue && (<img onClick={()=>setSearchValue('')} className="searchremove" src="/img/btnremove.svg" alt="remove"/>)}
          <img width={20} height={20} src="/img/search.svg" alt="search"/>
          <input onChange={onChangeSearchInput}  value={searchValue} placeholder="search..."/>
        </div>
        </div>
        
        <div className="maincards">
        {renderItems()
          
        }
        
        </div>
         </div>
    );
}
export default Home;