import {useState} from 'react'
import {Button} from "@/components/ui/button"

import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className='text-5xl text-center'>Website</h1>
            <Button variant="default">Button</Button>

        </>
    )
}

export default App
