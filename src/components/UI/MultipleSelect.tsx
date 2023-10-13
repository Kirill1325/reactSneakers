import React, { useEffect, useState } from 'react'
import { IOption } from '../../types/types';

type multipleSelectProps = {
    options: IOption[],
    value: IOption[],
    defaultValue: IOption,
    setState: React.Dispatch<React.SetStateAction<IOption[]>>
}

function MultipleSelect({ options, value, defaultValue, setState }: multipleSelectProps) {

    const [isOpen, setIsOpen] = useState(false)

    const isOptionSelected = (option: IOption) => {
        return value.some(v => v.value === option.value)
    }

    const handleSelectOption = (option: IOption) => {
        if (isOptionSelected(option)) {
            setState(value.filter(o => o.value !== option.value))
        } else {
            setState([...value, option])
        }
    }

    const handleSelectedOptionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, v: IOption) => {
        e.stopPropagation()
        handleSelectOption(v)
    }

    const handleClearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setState([])
        setIsOpen(false)
    }

    return (
        <div
            className='selectContainer'
            tabIndex={0}
            onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <p>{defaultValue.name}</p>
            <div className='selectDivider'></div>
            <span className='selectValue'>{value.map(v =>
                <button key={v.value} onClick={(e) => handleSelectedOptionClick(e, v)} className='optionBadge' >
                    {v.name}
                    <span className='optionRemoveBtn' >&times;</span>
                </button>
            )}</span>
            <button className='selectClearBtn' onClick={(e) => handleClearClick(e)} >&times;</button>
            <div className='selectDivider'></div>
            <div className='selectCaret'></div>
            <ul className={'selectOptions' + (isOpen ? ' open' : '')}>
                {options.map(option => (
                    <li
                        key={option.value}
                        onClick={() => handleSelectOption(option)}
                        className={'selectOption' + (isOptionSelected(option) ? ' selected' : '')}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default MultipleSelect