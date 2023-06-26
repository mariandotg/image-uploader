
const ImageUploader: () => JSX.Element = () => {
  return (
    <div className="image-uploader-container">
      <input type='file' className="image-uploader"/>
      <div>
        <img src="../public/image.svg"/>
        <span>Drag & Drop your image here</span>
      </div>
    </div>
  )
}

export default ImageUploader
