import React from 'react'
import { useState } from 'react'


export default function App() {
  return (
    <div className='container'>
      <Counter></Counter>
    </div>
  )
}




function Counter() {
  const [count, setCount] = useState(0)
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count)
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <span>Count : {count}</span>
      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <span>{count === 0
        ? "Today is "
        : count > 0
        ? `${count} days from today is `
        : `${count} days ago was`
      }</span>
      <p> {date.toDateString()} </p>
    </div>
  )
}

