import '../styles/App.css'
import React from 'react'
import UploadImageCard from './components/UploadImageCard'
import Loader from './components/Loader'

const Index: () => JSX.Element = () => {
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <>
      {!loading ? <UploadImageCard setLoading={setLoading} /> : <Loader />}
    </>
  )
}

export default Index
