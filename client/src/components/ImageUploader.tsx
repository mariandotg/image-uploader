import axios from 'axios'
import React, { type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const ImageUploader: () => JSX.Element = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const postImage: (formData: FormData) => Promise<void> = async (formData) => {
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dgsft8yky/image/upload', formData)
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setLoading(true)

    const formData = new FormData(

    )
    const nuevoUUID = uuidv4()
    setTimeout(async () => {
      try {
        if (e.target.files != null) {
          formData.append('file', e.target.files[0])
          formData.append('upload_preset', 'lastzb0v')
          formData.append('folder', 'dev-challenges-image-uploader')
          await postImage(formData)
          setLoading(false)
          navigate(`/${nuevoUUID}`)
        }
      } catch (error) {
        console.log(error)
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
