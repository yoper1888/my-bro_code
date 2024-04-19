
import React from 'react'
const images = './src/assets/photo1.jpg'
export default function Picture() {
    const images = './src/assets/photo1.jpg'

    const handelclick = function (e) { e.target.style.display = "none" }
    return (
        <div>
            <img onClick={(e) => handelclick(e)} src={images}></img>

        </div>
    )
}
