import React from 'react'

const Item = (props) => {
  return (
    <>
        <li className='item fw-300 text-capitalize card'>{props.name}</li>
    </>
  )
}

export default Item;
