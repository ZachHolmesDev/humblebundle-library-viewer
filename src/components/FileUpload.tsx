import { ChangeEvent, useState } from 'react'

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      // if file exists then update the state 
      if (event.target.files && event.target.files.length > 0) {
        setSelectedFile(event.target.files[0])
      } else {

      }
    }
  
  return (
    <div>
      <label htmlFor="file-upload">Upload your Humble libary JSON here : </label>
      <input 
        type="file" 
        id="file-upload" 
        accept='.json'
        onChange={handleFileChange}
      />
      {/* {humbleJsonFile && <p>File selected: {humbleJsonFile.name}</p>} */}
    </div>
  )
}

export default FileUpload