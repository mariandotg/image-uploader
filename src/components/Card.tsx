import Button from './Button'

const Card: () => JSX.Element = () => {
  const handleClick: () => void = () => { console.log('test button') }

  return (
    <div className="card">
      <Button onClickHandler={handleClick}>
        Choose a file
      </Button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <label>Select a file:</label>
      <input type="file" id="myfile" name="myfile"></input>
    </div>
  )
}

export default Card
