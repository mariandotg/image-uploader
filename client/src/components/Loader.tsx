type LoaderComponent = () => JSX.Element

const Loader: LoaderComponent = () => {
  return (
    <div className="loader">
        <h3>Uploading...</h3>
        <div className="bar">
            <span></span>
        </div>
    </div>
  )
}

export default Loader
