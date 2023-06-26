import Button from './Button'
import ImageUploader from './ImageUploader'

const Card: () => JSX.Element = () => {
  const handleClick: () => void = () => { console.log('test button') }

  return (
    <div className="card">
      <ImageUploader />
      <Button onClickHandler={handleClick}>
        Choose a file
      </Button>
    </div>
  )
}

export default Card
