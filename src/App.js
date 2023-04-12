import './App.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import axios from 'axios';
import ItemList from './components/ItemList';
import FilterProduct from './components/FilterProduct';
import { FormControlLabel, FormGroup, Switch, textStyle } from '@mui/material';
import TextField from "@mui/material/TextField";

function App() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setItems(res.data);
      setFilter(res.data);
    });
  }, [])


  const [filter, setFilter] = useState(items);
  // const [searchTerm, setSearchTerm] = useState("");

  // const FILTER_MAP = {
  //   All: () => true,
  //   Active: (task) => !task.completed,
  //   Completed: (task) => task.completed
  // };

  let [filterText, updateFilterText] = useState("all");

  // let filterList = filter.filter((data) => {
  //   if (filterText === "complete") {
  //     return data.completed === true;
  //   }
  //   else if (filterText === "incomplete") {
  //     return data.completed === false;
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

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  function onFilterSelected(filterValue) {
    // console.log(filterValue);
    updateFilterText(filterValue);
  }

  // const filterItemsComplete = () => {
  //   const updatedItems = items.filter((item) => {
  //     return item.completed === true
  //   })

  //   setFilter(updatedItems)
  // }

  // const filterItemsincomplete = () => {
  //   const updatedItems = items.filter((item) => {
  //     return item.completed === false
  //   })

  //   setFilter(updatedItems)
  // }

  const filterItemsAll = () => {
    const updatedItems = items.filter((item) => {
      return item
    })

    setFilter(updatedItems)
  }

  // const handleFilter = (event) => {
  //   setFilter(event.target.value);
  // };

  function handleChangeCompleted(event) {

    setFilter(items.filter(item => {
      return item.completed === event.target.checked;
    }))

  }

  return <div style={{ textAlign: 'center' }}>
    <h1 style={{marginTop: 25}}>ToDo List</h1>
      <label>Search:&nbsp;&nbsp;</label>

      {/* Search bar */}

      <input type='text' placeholder='Search for a Task' onChange={handleSearch} style={{ width: '30%', height: 35, marginBottom: 25, marginTop: 25 }} />

    {/* <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          onChange={handleSearch}
        /> */}

    {/* Dropdown Menu */}
    {/* <FilterProduct filterValueSelected={onFilterSelected} ></FilterProduct> */}

    {/* Buttons */}
    {/* <div>
      <button type='button' onClick={() => filterItemsAll()} className='btn btn-dark'>All</button>
      <button onClick={() => filterItemsComplete()}>Complete</button>
      <button onClick={() => filterItemsincomplete()}> Not Complete</button>
    </div> */}


    {/* Toggle Menu */}
    <div className='d-flex justify-content-around' style={{marginBottom: 25}}>
      <button type='button' onClick={() => filterItemsAll()} className='btn btn btn-outline-primary'>Display All</button>
      <div>
      <FormGroup style={{marginRight: 'auto'}}>
        <FormControlLabel control={<Switch
          onChange={handleChangeCompleted}
          inputProps={{ 'aria-label': 'controlled' }}
        />} label={"Status"} />
      </FormGroup>
      </div>
    </div>

    {items ? <ItemList filter={filter} /> : <Loader />}

  </div>
}

export default App;
