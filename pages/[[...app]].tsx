import React, {useState, useEffect} from 'react'
import AppMain from '../src/components/App'

function App() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return <AppMain/>
}

export default App
