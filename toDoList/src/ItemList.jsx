import { useState } from 'react'
import './ItemList.css'

export default function ItemList({items, setItems}) {

    function handleClick(item) {
        console.log(item)
        item.state = true
        setItems(items.filter((item) => item.state === false))
    }

    return (
        <div className='listContainer'>
        <ul>
            <h2>List</h2>
            <li className='labelItem'>
                <p className='labelText itemName'>To do</p>
                <p className='labelText date'>Date</p>
                <p className='labelText checkbox checkboxLabel'>Mark as done</p>
            </li>
            <div className='itemsContainer'>
                {items.map( item => 
                    <li key={item.id}>
                        <p className='itemName'>{item.name}</p>
                        <p className='date'>{item.date.getDate()} {item.month} {item.date.getFullYear()}</p>
                        <input type="checkbox" className='checkbox' onClick={() => handleClick(item)} />
                    </li>
                    
                )}
            </div>
        </ul>
        </div>
    )
}