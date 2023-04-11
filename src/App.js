import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
import ItemList from './components/ItemList';
import FilterProduct from './components/FilterProduct';

function App() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setItems(res.data);
      setFilter(res.data);
    });
  }, [])


  const [filter, setFilter] = useState(items);

  // const FILTER_MAP = {
  //   All: () => true,
  //   Active: (task) => !task.completed,
  //   Completed: (task) => task.completed
  // };

  // let [filterText, updateFilterText] = useState("all");

  // let filterList = filter.filter((data) => {
  //   if (filterText === "complete") {
  //     return data?.completed === true;
  //   }
  //   else if (filterText === "incomplete") {
  //     return data?.completed === false;
  //   }
  //   else {
  //     return data;
  //   }
  // })

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    // console.log(value);
    result = filter.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilter(result);
  }

  // function onFilterSelected(filterValue) {
  //   // console.log(filterValue);
  //   updateFilterText(filterValue);
  // }

  const filterItemsComplete = () => {
    const updatedItems = items.filter((item) => {
      return item.completed === true
    })

    setFilter(updatedItems)
  }

  const filterItemsincomplete = () => {
    const updatedItems = items.filter((item) => {
      return item.completed === false
    })

    setFilter(updatedItems)
  }

  const filterItemsAll = () => {
    const updatedItems = items.filter((item) => {
      return item
    })

    setFilter(updatedItems)
  }

  return <div>
    <label>Search</label>
    <input type='text' onChange={(e) => handleSearch(e)} />
    {/* <FilterProduct filterValueSelected={onFilterSelected} ></FilterProduct> */}

    <div>
      <button onClick={() => filterItemsAll()}>All</button>
      <button onClick={() => filterItemsComplete()}>Complete</button>
      <button onClick={() => filterItemsincomplete()}> Not Complete</button>
    </div>
    {items ? <ItemList filter={filter} /> : <Loader />}
  </div>
}

export default App;
