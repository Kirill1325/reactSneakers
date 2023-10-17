import React, { useEffect, useState } from 'react'
import '../styles/App.css';
import { IProduct } from '../types/types'
import ProductItemInBag from '../components/ProductItemInBag'

interface BagProps {
  productsInBag: IProduct[],
  setShoes: React.Dispatch<React.SetStateAction<IProduct[]>>,
  setAllClothes: React.Dispatch<React.SetStateAction<IProduct[]>>,
  setAllAccesories: React.Dispatch<React.SetStateAction<IProduct[]>>,
  isMobile: boolean
}

function Bag({ productsInBag, setShoes, setAllClothes, setAllAccesories, isMobile }: BagProps) {

  

  // useEffect(() => {
  //   console.log(productsInBag)
  // }, [productsInBag])

  const [orderPrice, setOrderPrice] = useState<number>(0)

  return (
    <div className='bagContainer'>

      {productsInBag.length > 0
        ?
        <div className='bag'>
          <div className={'deliveryDescription' + (isMobile ? ' mobile' : '')}>
            <div className='delivery'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>

              <span>
                <h3>Delivery</h3>
                <p>The day after tomorrow (Saturday, September 30), or later, from 3$</p>
              </span>
            </div>

            <div className='pickUpInStore'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                <h3>Pick up in store</h3>
                <p>Today or later, free</p>
              </span>
            </div>
          </div>
          <div className={'bagTop' + (isMobile ? ' mobile' : '')}>
            <div className='bagProducts'>
              <h3 style={{ margin: '20px 20px' }}>Your order</h3>
              {productsInBag.map((product, idx) =>
                product.sizes.filter(size => size.inBag).map((size, idx2) =>
                  <ProductItemInBag
                    key={idx + '-' + idx2}
                    product={product}
                    size={size.size}
                    setOrderPrice={setOrderPrice}
                    setShoes={setShoes}
                    setAllClothes={setAllClothes}
                    setAllAccesories={setAllAccesories}
                    isMobile={isMobile}
                  />)
              )}
            </div>

            <div className='orderPrice'>
              <div className='orderDescription'>
                <h3 style={{ margin: '20px 20px' }}>Order price</h3>
                <hr style={{ margin: '20px' }} />
                <div className='orderDescriptionPrice'>
                  <p>Total price</p>
                  <p>{`${orderPrice} $`}</p>
                </div>
                <div className='orderDescriptionCashback'>
                  <p>Cashback</p>
                  <p>{` ${orderPrice * 0.01} $`}</p>
                </div>
              </div>
              <div className='orderButton'>
                <button>Checkout</button>
              </div>
            </div>

          </div>
        </div>

        :
        <div className='emptyBag'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <b>Your bag is empty</b>
        </div>
      }

    </div>
  )
}

export default Bag