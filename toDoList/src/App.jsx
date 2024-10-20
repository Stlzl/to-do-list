import Topbar from "./Topbar"
import ItemList from "./ItemList"
import { useState } from "react"

function App() {

  const [items, setItems] = useState([])

  return (
    <>
    <Topbar items={items} setItems={setItems}></Topbar>
    <ItemList items={items} setItems={setItems} />
    </>
  )
}

export default App
