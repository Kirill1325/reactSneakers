import React from 'react'
import { IProduct } from '../types/types'

interface MobileSearchedProductItemProps {
    product: IProduct
}

function MobileSearchedProductItem({ product }: MobileSearchedProductItemProps) {
  return (
    <div className='mobileSearchedProductItem'>
        <img src={product.img}></img>
        <p>{product.brandName} {product.model}</p>
    </div>
  )
}

export default MobileSearchedProductItem