import React, { useEffect, useState } from 'react'
import { search } from '../hooks/UseProducts'
import { IProduct } from '../types/types'
import MobileSearchedProductItem from './MobileSearchedProductItem'
import { useAppSelector } from '../hooks/redux'
import { useDispatch } from 'react-redux'
import { toggleVisibility } from '../store/searchWindowSlice'
import { clearSearchHistory, setSearchHistory, setSearchQuerry } from '../store/searchQuerrySlice'

function MobileSearchWindow() {

    const { products } = useAppSelector(state => state.productsReducer)
    const { searchQuerry } = useAppSelector(state => state.searchQuerryReducer)
    const { searchHistory } = useAppSelector(state => state.searchQuerryReducer)
    const dispatch = useDispatch()

    const handleCloseWindow = () => {
        dispatch(setSearchQuerry(''))
        dispatch(toggleVisibility())
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuerry(e.target.value))
    }

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(setSearchHistory(searchQuerry))
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [searchQuerry])

    const sortedProducts = search(products, searchQuerry)

    return (
        <div className='mobileInputContainer'>
            <div className='mobileInputContent'>
                <div className='mobileInputSection'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-13">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input value={searchQuerry} onChange={(e) => handleInputChange(e)} ></input>
                    <button className='selectClearBtn' onClick={handleCloseWindow} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <hr></hr>
                <div className='searchHistory'>
                    <div className='searchHistoryTop'>
                        <b>Previous Searches</b>
                        <button onClick={() => dispatch(clearSearchHistory())}>Clear All</button>
                    </div>
                    {searchHistory && searchHistory.map((history, idx) => (
                        history !== '' &&
                        <div key={idx} className='history'>
                            <div className='historyLeft'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p>{history}</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='mobileSearchedProducts'>
                    {sortedProducts?.map(product => (
                        <MobileSearchedProductItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileSearchWindow