import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleHeaderVisibility } from '../store/headerSlice'
import { useNavigate } from 'react-router-dom'

function CardDetails() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCloseCardDetails = () => {
    dispatch(toggleHeaderVisibility())
    navigate('/')
  }

  return (
    <div className='cardDetailsContainer'>
      <div className='bigRectangle'>
        {/* <div className='optionRemoveBtn' onClick={handleCloseCardDetails} >&times;</div> */}
        <button onClick={handleCloseCardDetails} className='selectClearBtn' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='cardDetailsContent'>
        <div className='cardDetailsData'>
          <div>
            <p>Cardholred Name</p>
            <input placeholder='e.g. Mike Israetel'></input>
          </div>
          <div>
            <p>Card number</p>
            <input placeholder='e.g. 1234 5678 0909 1454'></input>
          </div>
          <div className='cardDateAndCvc'>
            <div className='cardDate'>
              <p>Exp. Date (MM/YY)</p>
              <div className='dateInputs'>
                <input placeholder='MM'></input>
                <input placeholder='YY'></input>
              </div>
            </div>
            <div className='CVC'>
              <p>CVC</p>
              <input placeholder='e.g. 123'></input>
            </div>
          </div>
        </div>
        <div className='cardDetailsBtnContainer'>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default CardDetails