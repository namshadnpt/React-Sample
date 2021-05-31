import React, { useContext } from 'react'
import {AppContext} from '../AppContext'
function Page() {
  const {data} = useContext(AppContext)
  return (
    <div>
      <h1>Test Page {data}</h1>
    </div>
  )
}

export default Page
