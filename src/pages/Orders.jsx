import Card from '../components/Card';
import React from 'react';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const{}=React.useContext(AppContext)
  const[orders,setOrders]=React.useState([]);
  const[isLoading,setIsLoading]=React.useState(true);
React.useEffect(()=>{
  (async()=>{
try {
      
  const {data} = await axios.get("https://62bc95edeff39ad5ee284fd2.mockapi.io/orders")
 setOrders(data.reduce((prev,obj)=>[...prev,...obj.items],[]))
  setIsLoading(false)
} catch (error) {
  alert("shekvetis damushaveba"+error)
}
  })()
},[]);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>my orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item,index) => (
 <Card key={index}
 added
 loading={isLoading}
 {...item} />))}
      </div>
    </div>
  );
}
export default Orders;