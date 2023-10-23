import React from 'react'
import { IProduct } from '../types/types'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../store/searchWindowSlice';
import { setSearchQuerry } from '../store/searchQuerrySlice'

interface MobileSearchedProductItemProps {
  product: IProduct,
}

function MobileSearchedProductItem({ product }: MobileSearchedProductItemProps) {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleProductClick = () => {
    if (product.categorie === 'Shoes') {
      navigate(`/MansShoes/${product.id}`)
    } else if (product.categorie === 'Clothes') {
      navigate(`/Clothes/${product.id}`)
    } else if (product.categorie === 'Accesories') {
      navigate(`/Accesories/${product.id}`)
    }
    dispatch(toggleVisibility())
    dispatch(setSearchQuerry(''))
  }

  return (
    <div className='mobileSearchedProductItem' onClick={handleProductClick}>
      <img src={product.img}></img>
      <p>{product.brandName} {product.model}</p>
    </div>
  )
}

export default MobileSearchedProductItem