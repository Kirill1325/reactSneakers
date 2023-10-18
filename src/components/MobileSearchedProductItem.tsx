import React from 'react'
import { IProduct } from '../types/types'
import { useNavigate } from 'react-router-dom';


interface MobileSearchedProductItemProps {
  product: IProduct,
  setIsSearchWindowShown: React.Dispatch<React.SetStateAction<boolean>>

}

function MobileSearchedProductItem({ product, setIsSearchWindowShown }: MobileSearchedProductItemProps) {

  const navigate = useNavigate()

  const handleProductClick = () => {
    if (product.categorie === 'Shoes') {
      navigate(`/MansShoes/${product.id}`)
    } else if (product.categorie === 'Clothes') {
      navigate(`/Clothes/${product.id}`)
    } else if (product.categorie === 'Accesories') {
      navigate(`/Accesories/${product.id}`)
    }
    setIsSearchWindowShown(false)
  }

  return (
    <div className='mobileSearchedProductItem' onClick={handleProductClick}>
      <img src={product.img}></img>
      <p>{product.brandName} {product.model}</p>
    </div>
  )
}

export default MobileSearchedProductItem