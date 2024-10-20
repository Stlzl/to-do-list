import { useState } from 'react'
import './Topbar.css'

export default function Topbar({items, setItems}) {

    const [input, setInput] = useState('')

    function handleClick() {
        setItems(oldItems => [...oldItems, {
            name: input,
            state: false
        }])
    }

    return (
        <>
            <div className="topbarHeaderContainer">
                <h1 className="topbarHeader">Type a thing to add to the list</h1>
                <div className='inputContainer'>
                    <input onChange={e => setInput(e.target.value)}type='text'></input>
                    <button onClick={handleClick} className='addButton'>
                        +
                    </button>
                </div>
            </div>
        </>
    )
}