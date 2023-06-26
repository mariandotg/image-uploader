import Button from './Button'
import ImageUploader from './ImageUploader'

const Card: () => JSX.Element = () => {
  const handleClick: () => void = () => { console.log('test button') }

  return (
    <div className="card">
      <div>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png...</p>
      </div>
      <ImageUploader />
      <span>Or</span>
      <Button onClickHandler={handleClick}>
        Choose a file
      </Button>
    </div>
  )
}

export default Card
