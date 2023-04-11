
import React, { Component } from 'react'
import "./ItemList.css"

// const ItemList = ({ items }) => {
class ItemList extends Component {
    render() {
        const { filter } = this.props
        const ulStyle = {border: '2px solid green', width:'100%', listStyleType:'none'}
        const liStyle = {borderStyle: 'groove', background: "#e9a5f2"}
        return (
            // <div>
            <>
                <ul className='list-group' style={ulStyle} >
                    
                    {filter.map((item) => (
                        <div className='text-center mt-2'>
                            <li className='list-item' style={liStyle}>{item.id}.&nbsp;&nbsp;&nbsp;&nbsp;{item.title}
                            
                            <p className='list-status'>{item.completed ? "Completed" : "Not Completed"}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            </>
        )
    }
}

export default ItemList