import React, { useState } from 'react'
import { PropTypes } from "prop-types";
const starContainerStyle = {
    display: 'flex',
    gap: '4px'

}


const textStyle = {
    lineHeight: '1',
    margin: '0'
}


export default function Rating({ rangeRating }) {
    const [count, setCount] = useState(0)
    const [tempRating, setTempRating] = useState(0)
    function hadnleRating(rating) {
        setCount(rating)
    }   
    return (
        <div className='container'>
            <h1>امتیاز دهی</h1>

            <div style={starContainerStyle} className='startContainer'>
                {Array.from({ length: rangeRating }, (_, i) => (
                    <Star full={tempRating ? tempRating >= i + 1 : count >= i + 1}
                        key={i}

                        onRating={() => hadnleRating(i + 1)}

                        onMouseIn={() => setTempRating(i + 1)}

                        onMouseOut={() => setTempRating(0)}>

                    </Star>

                ))}
                <p>{tempRating ? tempRating : count || "0"}</p>
            </div>



        </div>
    )
}



function Star({ onRating, full, onMouseIn, onMouseOut }) {
    const imgStyle = {
        width: "45px"
    }
    return (
        <span onClick={onRating} onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>


            {
                full ? (

                    <img style={imgStyle}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIM-zgLhTeteD9du4Y79CxPOFt_knx4nXiA&s"
                        alt="" />
                ) : (
                    <img style={imgStyle}
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png" alt="" />
                )
            }

        </span>
    )


}

