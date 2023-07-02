import { type ChangeEvent } from 'react'

interface ImageUploaderProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const ImageUploader: (props: ImageUploaderProps) => JSX.Element = ({ onChangeHandler }) => {
  return (
    <div className="image-uploader-container">
      <input type='file' id="fileInput" className="image-uploader" onChange={onChangeHandler} />
      <div>
        <div className="dark-hover"></div>
        <img src="../public/image.svg"/>
        <span>Drag & Drop your image here</span>
      </div>
    </div>
  )
}

export default ImageUploader
