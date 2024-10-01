import React, { useEffect } from 'react'

const TextStroke = (props) => {
    useEffect(()=>{},[props])
  return (
    <p className={`text-stroke ${props.className}`}>
        {props.content}
    </p>
  )
}

export default TextStroke