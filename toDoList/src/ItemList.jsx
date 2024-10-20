import { useState } from 'react'
import './ItemList.css'

export default function ItemList({items, setItems}) {

    function handleClick(item) {
        console.log(item)
        item.state = true
    }

    return (
        <ul>
            {items.map( item => 
                <li key={item.name}>
                    {!item.state && item.name}{item.state && 'Done !'}
                    <input type="checkbox" onClick={() => handleClick(item)} />
                </li>
            )}
        </ul>
    )
}