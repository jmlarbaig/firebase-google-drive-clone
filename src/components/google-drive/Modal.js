import React, { useState } from 'react'

export const Modal = ({ open }) => {
    if (!open) return null
    return (
        <div>
            Modal
        </div>
    )
}