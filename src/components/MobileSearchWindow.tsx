import React, { useEffect, useState } from 'react'
import { search } from '../hooks/UseProducts'
import { IProduct } from '../types/types'
import MobileSearchedProductItem from './MobileSearchedProductItem'


interface MobileSearchWindowProps {
    products: IProduct[],
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    setIsSearchWindowShown: React.Dispatch<React.SetStateAction<boolean>>

}

function MobileSearchWindow({ products, value, setState, setIsSearchWindowShown }: MobileSearchWindowProps) {

    const sortedProducts = search(products, value)

    const handleCloseWindow = () => {
        setIsSearchWindowShown(false)
        setState('')
    }

    const [searchHistory, setSearchHistory] = useState([''])

    useEffect(() => {
        const id = setTimeout(() => {
            setSearchHistory(prevHistory => [...prevHistory, value])
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    }, [value])

    useEffect(() => {
        const data = localStorage.getItem('SEARCH_HISTORY')
        if (data !== null) setSearchHistory(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('SEARCH_HISTORY', JSON.stringify(searchHistory))
    }, [searchHistory])



    return (
        <div className='mobileInputContainer'>
            <div className='mobileInputContent'>
                <div className='mobileInputSection'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-13">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input value={value} onChange={(e) => setState(e.target.value)} ></input>
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
                        <button onClick={() => setSearchHistory([])}>Clear All</button>
                    </div>
                    {searchHistory.map((history, idx) => (
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
                    {sortedProducts.map(product => (
                        <MobileSearchedProductItem
                            key={product.id}
                            product={product}
                            setIsSearchWindowShown={setIsSearchWindowShown}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileSearchWindow