import { useParams } from 'react-router-dom'

const UploadedImage: () => JSX.Element = () => {
  const { id } = useParams()
  return (
    <div>{id}</div>
  )
}

export default UploadedImage
