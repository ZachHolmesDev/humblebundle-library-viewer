import React from 'react'
import { useState } from 'react'

function fileUpload() {
    const [humbleJsonFile, setFile] = useState(undefined)

    const handleFileUpload = (event) => {
      setFile
    }
  return (
    <div>
        <h2>file goes here</h2>
        <input type="file" />
    </div>
  )
}

export default fileUpload