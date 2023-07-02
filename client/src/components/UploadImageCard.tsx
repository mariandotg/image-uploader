import React, { type ChangeEvent } from 'react'
import Button from './Button'
import ImageUploader from './ImageUploader'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

interface UploadImageCardProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const UploadImageCard: (props: UploadImageCardProps) => JSX.Element = (props) => {
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
    props.setLoading(true)

    const formData = new FormData()
    const nuevoUUID = uuidv4()
    setTimeout(async () => {
      try {
        if (e.target.files != null) {
          formData.append('file', e.target.files[0])
          formData.append('upload_preset', 'lastzb0v')
          formData.append('folder', 'dev-challenges-image-uploader')
          await postImage(formData)
          props.setLoading(false)
          navigate(`/${nuevoUUID}`)
        }
      } catch (error) {
        console.log(error)
      }
    }, 2000)
  }

  return (
    <div className="card">
      <div>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png...</p>
      </div>
      <ImageUploader onChangeHandler={handleFileChange} />
      <span>Or</span>
      <Button onClickHandler={() => { document?.getElementById('fileInput')?.click() }}>
        Choose a file
      </Button>
    </div>
  )
}

export default UploadImageCard
