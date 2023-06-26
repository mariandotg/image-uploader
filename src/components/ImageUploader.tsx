import React, { type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const ImageUploader: () => JSX.Element = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setTimeout(() => {
      if (e.target.files != null) {
        setLoading(false)
        navigate(`/${e.target.files[0]?.name}`)
      }
    }, 2000)
  }

  return (
    <div className="image-uploader-container">
      <input type='file' className="image-uploader" onChange={handleFileChange} />
      <div>
        <div className="dark-hover"></div>
        <img src="../public/image.svg"/>
        {loading && <div>Cargando...</div>}
        <span>Drag & Drop your image here</span>
      </div>
    </div>
  )
}

export default ImageUploader
