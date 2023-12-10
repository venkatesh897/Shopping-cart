import React from 'react'
import Products from '../../components/Products/Products'
import {PRODUCTS} from '../../products'


function Shop() {
  
  return (
    <div className='shop'>

        <div className='shopTitle'>
            <h3>Shopit</h3>
        </div>

        <div className='products'>
            {PRODUCTS.map((product)=> (<Products data = {product}/>))}
        </div>
    </div>
  )
}

export default Shop
