import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Api from './Api';


function App() {
  const [menudata, setmenudata] = useState(Api);

  const filter = (category) => {
    if (category) {
      const update = Api.filter((curent) => {
        return curent.category === category;
      });
      setmenudata(update);
    } else {
      setmenudata(Api);
    }
  };
  return (
    <div className="App">
     <div> <Header filter={filter}/></div>
    <div className="content">
       <Card menudata = {menudata}/>
    </div>
     <div><Footer/></div>
    </div>
  );
}




export default App;
