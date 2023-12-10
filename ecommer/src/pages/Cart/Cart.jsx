import React, { useContext } from 'react'
import CardItem from '../../components/CardItem/CardItem'
import { ShopContext } from '../../context/ShopContextProvider'
import { PRODUCTS } from '../../products'
function Cart() {
  const {addToCart,removeFromCart,cartItems} = useContext(ShopContext)
  return (
    <div className='cart'>

      <div>
      <h2>Cart Items</h2>
      </div>

      <div className='CartItems'>

        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !==0)
          {
            return <CardItem data={product}/>
          }
        })}
      </div>
    </div>
  )
}

export default Cart
