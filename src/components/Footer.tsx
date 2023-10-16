import React from 'react'
import logo from '../imgs/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerColumns'>
                <div className='footerColumn'>
                    <b>About Us</b>
                    <p>Vacancies</p>
                    <p>Contacts</p>
                    <p>Shops</p>
                    <p>News</p>
                    <p>Abous Us</p>
                </div>
                <div className='footerColumn'>
                    <b>Q&A</b>
                    <p>Bonus Program</p>
                    <p>Where is my order?</p>
                    <p>Shipping And Payment</p>
                    <p>Exchange And Return</p>
                </div>
                <div className='footerColumn'>
                    <b>Brands</b>
                    <p>Adidas</p>
                    <p>Nike</p>
                    <p>Puma</p>
                    <p>Reebook</p>
                    <p>New Balance</p>
                </div>
            </div>
        </div>
    )
}

export default Footer