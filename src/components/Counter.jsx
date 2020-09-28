import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const sumCount = () => {
    setCount(count + 1)
  }
  const subCount = () => {
    setCount(count - 1)
  }
  return <>
      <input type="text"/>
        <button onClick={sumCount}> + </button>
        <button onClick={subCount}> - </button>
        <h3>리스트 개수 : {count}</h3>
  </>
}

export default Counter;