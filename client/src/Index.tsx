import '../styles/App.css'
import React from 'react'
import UploadImageCard from './components/UploadImageCard'

const Index: () => JSX.Element = () => {
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <>
      {!loading ? <UploadImageCard setLoading={setLoading} /> : <span>Loading...</span>}
    </>
  )
}

export default Index
