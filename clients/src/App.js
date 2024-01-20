import React from 'react'
import { useEffect, useState } from 'react'

function App() {
  const [backenddata, setBackenddata] = useState([{}])
  useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => {
      setBackenddata(data)
      console.log(data);
    })
  }, [])

  return (
    <>
      {(typeof backenddata.users === 'undefined') ? (<p>LOADING...</p>) : backenddata.users.map((user, i) => (
        <p key={i}>{user}</p>)
      )}

    </>
  )
}

export default App
