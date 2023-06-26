import React from 'react'

const Card: () => JSX.Element = () => {
  const [count, setCount] = React.useState(0)

  return (
    <div className="card">
      <button onClick={() => { setCount((count) => count + 1) }}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <label>Select a file:</label>
      <input type="file" id="myfile" name="myfile"></input>
    </div>
  )
}

export default Card
