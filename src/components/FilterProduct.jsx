import './FilterProduct.css'

let FilterProduct = (props) => {

    function filterChange(e){
        // console.log(e.target.value);
        props.filterValueSelected(e.target.value)
    }

    return (
        <div className="filter-area">
            <select name="isComplete" onChange={(filterChange)}>
                <option value="all">All</option>
                <option value="complete">Completed</option>
                <option value="incomplete">Not Completed</option>
            </select>
        </div>
    )
}

export default FilterProduct