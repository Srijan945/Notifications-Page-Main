import './css/App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Tab from "./Tab.jsx";
import data from '../data';
import { useState } from 'react';
function App() {

  const [allAsRead,setAllAsRead]= useState(false);
  return <div className='app'>
    <Header setAllAsRead={setAllAsRead}/>
    {data.map(function(ele){
      return <Tab key={ele.name} notification={ele} allAsRead={allAsRead}/>
    })}
    <Footer />
  </div>
}

export default App;
