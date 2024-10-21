import { useState } from 'react'
import './Topbar.css'

export default function Topbar({items, setItems}) {

    const [input, setInput] = useState('')

    function getMonthName(date) {
        switch(date.getMonth()) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    }

    function handleClick() {
        setItems(oldItems => [...oldItems, {
            name: input,
            state: false,
            date: new Date(),
            month: getMonthName(new Date()),
            id: self.crypto.randomUUID()
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