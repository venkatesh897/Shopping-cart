import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContextProvider'

function Products(props) {
   const {id,productName,price,productImage}  = props.data

   const {addToCart,removeFromCart,cartItems} = useContext(ShopContext)

   const CartItemCount = cartItems[id]

  return (
    <div className='product'>
        <div className='image'>
        <img src={productImage}></img>
        </div>

        <div className='description'>
            <h3>{productName}</h3>
        </div>

        <div className='price'>
            ${price}
        </div>

        <div className='addButton'>
       <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>

        {cartItems[id] > 0 && <p>{CartItemCount}</p>}

        {cartItems[id]>0 &&<div className='removeButton'><button onClick={()=>removeFromCart(id)}>Remove from Cart </button></div>}

        
    </div>
  )
}

export default Products
