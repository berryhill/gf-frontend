import React from 'react'


const Products = ({products}) => {

  return (
    <ul className='product-list'>
      {products.map(function (product, index) {
        return (
          <li key={index} className='product-item'>
            <img
              className='product-image'
              src={'https://'+ product.image}
            />
            <div className='product-text'>
              <ul>{product.brand}</ul>
              <ul>{product.name}</ul>
              <ul>{product.price}</ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Products
