import Card from '../components/Card';

import AppContext from '../context';
import React from 'react';

function Favorites({onAddToFavorite}) {

const state= React.useContext(AppContext)
console.log(state)
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Favorite</h1>
      </div>

      <div className="d-flex flex-wrap">
        {state.favorite.map((item, index) => (
 <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item}  />))}
      </div>
    </div>
  );
}
export default Favorites;