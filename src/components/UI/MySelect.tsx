import React, { useEffect, useState } from 'react'
import { IOption } from '../../types/types';
import '../../styles/App.css';

interface MySelectProps {
  options: IOption[],
  value: IOption,
  defaultValue: IOption,
  setState: React.Dispatch<React.SetStateAction<IOption>>
}

function MySelect({ options, value, defaultValue, setState }: MySelectProps) {

  const [isOpen, setIsOpen] = useState(false)

  const isOptionSelected = (option: IOption) => {
    return option.name === value.name
  }

  const handleClearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setState(defaultValue)
    setIsOpen(false)
  }

  return (
    <div
      className='selectContainer'
      tabIndex={0}
      onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span className='selectValue'>{value.name}</span>
      <button className='selectClearBtn' onClick={(e) => handleClearClick(e)} >&times;</button>
      <div className='selectDivider'></div>
      <div className='selectCaret'></div>
      <ul className={'selectOptions' + (isOpen ? ' open' : '')}>
        {options.map(option => (
          <li
            key={option.value}
            onClick={() => setState(option)}
            className={'selectOption' + (isOptionSelected(option) ? ' selected' : '')}
          >
            {option.name}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default MySelect