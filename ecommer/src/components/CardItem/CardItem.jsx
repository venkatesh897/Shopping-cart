import React from 'react'

function CardItem({data}) {
  return (
    <div>
    <div className='image'>
    <img src={data.productImage}></img>
    </div>

    <div className='description'>
        <h3>{data.productName}</h3>
    </div>

    <div className='price'>
        ${data.price}
    </div>
    </div>
  )
}

export default CardItem

