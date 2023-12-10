import React from 'react'
import { Navbar } from './Navbar'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
    const menuItem = [
        {
            path: '/',
            icon: 'bi-speedometer2',
            text: 'Dashboard'
        },
        {
            path: '/customers',
            icon: 'bi bi-person',
            text: 'Customers'
        },
        {
            path: '/items',
            icon: 'bi bi-trello',
            text: 'Items'
        },
        {
            path: '/itemkits',
            icon: 'bi bi-inbox',
            text: 'Item Kits'
        },
        {
            path: '/suppliers',
            icon: 'bi bi-download',
            text: 'Suppliers'
        },
        {
            path: '/reports',
            icon: 'bi bi-bar-chart-line',
            text: 'Reports'
        },
        {
            path: '/receivings',
            icon: 'bi bi-cloud-arrow-down-fill',
            text: 'Receivings'
        },
        {
            path: '/sales',
            icon: 'bi bi-cart-fill',
            text: 'Sales'
        },
        {
            path: '/giftcards',
            icon: 'bi bi-credit-card-fill',
            text: 'Giftcards'
        },
        {
            path: '/',
            icon: 'bi bi-box-arrow-left',
            text: 'Logout'
        },
    ]
    return (
        <div className='d-flex'>
            <div className='sidebar'>
                {/* <Navbar /> */}
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName='active' >
                            <i className={item.icon}></i>
                            <span className='link_text'>{item.text}</span>
                        </NavLink>
                    ))
                }
                <div className="top_section">
                    <h3 className="logo">PACKAGING DEPOT</h3>
                    <div className="bars">
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar