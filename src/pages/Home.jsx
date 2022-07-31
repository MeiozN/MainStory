import Card from '../components/Card';


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
  
  const renderItems=()=>{ 
    const filtredItems=items.filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
  
    return (isLoading ? [...Array(8)] : filtredItems).map((item,index)=>(          
      <Card 
      key={index}
      onPlus={(obj)=>onAddToCart(obj)}
      onFavorite={(obj)=>onAddToFavorite(obj)}
      added={cartItems.some((obj)=>Number(obj.id)===Number(item.id))}
      loading={isLoading}
      {...item}
        />

      ));
   }
  
  return(
        <div className="content">
        <div className="content-header">
        <h1>{searchValue? `ძიების შედეგი:${searchValue}`: 'ტანსაცმელი'}</h1>
        <div className="search-box">
          {searchValue && (<img onClick={()=>setSearchValue('')} className="searchremove" src="/img/btnremove.svg" alt="remove"/>)}
          <img width={20} height={20} src="/img/search.svg" alt="search"/>
          <input onChange={onChangeSearchInput}  value={searchValue} placeholder="ძიება..."/>
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