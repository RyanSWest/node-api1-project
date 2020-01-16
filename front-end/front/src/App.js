import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import './index.css';
import AddForm from './components/addForm'
import Guy from './components/Guy';

function App() {

const [guys, setGuys]= useState([]);


useEffect(()=> {
  axios.get('http://localhost:4000/api/users')
  .then(res=> setGuys(res.data))
  .catch(err=> console.log(err))
})

 



  return (
    <div className="App">
      <header className="App-header">
        <h1>Characters</h1>
        <AddForm/>
         {guys.map(g=> {
           return(
             <Guy stuff ={g} />
           )
         })}
 

      </header>
    </div>
  );
}

export default App;
