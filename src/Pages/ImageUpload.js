//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 7 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Home
//    DESCRIPTION - Home Component
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'

export default function ImageUpload() {

    const [myImage, setImage] = useState()

    
    const handleSubmit = (e) => {
        e.preventDefault()        
        console.log("Image is ",myImage)
    }

    return (
        <div>
            <h1>Image Upload </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-1">
                    Image <span className="font-css top">*</span>
                    <div className="">
                        <input type="file" value={myImage} onChange={(e) => setImage(e.target.value)} name="ImageStyle" />
                    </div>
                    <div>
                        <button className='p-1 border-2 border-black bg-green-300 rounded'>Save Image</button>
                    </div>
                </div>
            </form>
            <div>
                <h1>View Image</h1>
                <img src={myImage} alt="" />
            </div>
        </div>
    )
}
