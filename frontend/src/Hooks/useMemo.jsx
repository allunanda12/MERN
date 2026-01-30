import React, { useState, useMemo } from 'react'

const Usememo = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const CubeNum = (num) => {
    console.log('calculation done...')
    return Math.pow(Number(num) || 0, 3)
  }

  const result = useMemo(() => CubeNum(number), [number])

  return (
    <div style={{ padding: '20px' }}>
      <h2>useMemo Hook Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count++</button>
      <br /><br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter number"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p>Cube of the number is {result}</p>
    </div>
  )
}

export default Usememo