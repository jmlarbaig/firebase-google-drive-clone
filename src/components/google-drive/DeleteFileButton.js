import React, { useState } from "react"
import ReactDOM from "react-dom"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { storage, database } from "../../firebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProgressBar, Toast } from "react-bootstrap"

export default function DeleteFileButton({ currentFile }) {

    async function handleDelete(e) {
        const res = await database.files.doc(currentFile.id).delete();
    }

    return (
        <>
            <label className="btn btn-outline-success btn-sm m-0 mr-2">
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
            </label>
        </>
    )
}
