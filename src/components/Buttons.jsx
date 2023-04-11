import React from 'react'

const Buttons = ({filter, filterItem, items}) => {
  return (
    <>
    <div className="d-flex justify-content-center">
        {filter.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => filterItem(items)}
        >
          All
        </button>
       </div>
    </>
  )
}

export default Buttons