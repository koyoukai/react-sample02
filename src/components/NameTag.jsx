import React from 'react'

const NameTag = (props) => {
  return (
    <>
      {props.name ? (
        <h3 style={props.style}>
          {props.name}
        </h3>
      ) : (
        <h3>Invalid</h3>
      )}
    </>
    
  )
}
export default NameTag