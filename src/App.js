
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
  return (
<div className="wrapper">
<Drawer/>
<Header />
 <div className="content">
<div className="content-header">
<h1>ტანსაცმელი</h1>
<div className="search-box">
  <img width={20} height={20} src="/img/search.svg" alt="search"/>
  <input placeholder="ძიება..."/>
</div>
</div>
<div className="maincards">
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</div>
 </div>
 </div>
  );
}

export default App;
