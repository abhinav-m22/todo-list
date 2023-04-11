import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
import ItemList from './components/ItemList';

function App() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setItems(res.data);
    });
  }, [])

  return <div>
    { items ? <ItemList items={items} /> : <Loader /> }
  </div>
}

export default App;
