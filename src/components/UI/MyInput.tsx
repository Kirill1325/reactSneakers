import React from 'react'
import '../../styles/App.css';

interface MyInputProps {
    placeholder: string,
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    isMobile: boolean,
    setIsSearchWindowShown: React.Dispatch<React.SetStateAction<boolean>>
}

function MyInput({ placeholder, value, setState, isMobile, setIsSearchWindowShown }: MyInputProps) {
    return (
        <>
            {isMobile
                ?
                <div className='mobileInput'>
                    <button onClick={() => setIsSearchWindowShown(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-11">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>


                </div>

                :
                <div className='inputContainer'>
                    <label className='inputLabel'>
                        <input placeholder={placeholder} value={value} onChange={(e) => setState(e.target.value)} ></input>
                    </label>
                </div>
            }
        </>
    )
}

export default MyInput