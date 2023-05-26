import { faFile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DeleteFileButton from './DeleteFileButton'
import React from "react"

export default function File({ file }) {
  return (
    <>
      <a
        href={file.url}
        className="btn btn-outline-dark text-truncate w-100"
      >
        <img src={file.url} width={'250px'} height={'auto'} className="" alt="logo" />
        {/* <FontAwesomeIcon icon={faFile} className="mr-2" /> */}
        {/* {file.name} */}
      </a>
      <DeleteFileButton currentFile={file} />
    </>
  )
}
