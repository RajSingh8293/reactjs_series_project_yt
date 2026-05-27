import { createContext, useState } from 'react'

export const CounterContext = createContext()

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(prev => prev + 1)
    }
    const decrease = () => {
        setCount(prev => prev - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <CounterContext.Provider value={
            { count, increase, decrease, reset }
        }
        >

            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider