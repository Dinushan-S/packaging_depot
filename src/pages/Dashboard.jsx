import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const menuItem = [
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
    ];
    const statistics = [
        {
            icon: 'bi bi-cart-fill',
            text: 'Total Items',
            number: 231
        },
        {
            icon: 'bi bi-person-fill',
            text: 'Total Customers',
            number: 512
        },
        {
            icon: 'bi bi-download-fill',
            text: 'Total Sales',
            number: 21478
        },
        {
            icon: 'bi bi-inbox',
            text: 'Total Item Kits',
            number: 0
        },
        {
            icon: 'bi bi-person-fill',
            text: 'Total Employees',
            number: 10
        },
        {
            icon: 'bi bi-credit-card-fill',
            text: 'Total Gift Cards',
            number: 0
        },
    ]
    return (
        <div>
            <div className='page-header d-flex'>
                <i className='bi bi-house-fill'></i>
                <Link to="/">Dashboard</Link>
            </div>
            <div className='card-container container-fluid d-flex p-5'>
                {menuItem.map((item, index) => (
                    <Link to={item.path} className='card-link d-flex flex-column '>
                        <div key={index} className='card'>
                            <div className='card-body'>
                                <div className='card-icon p-5'>
                                    <i className={item.icon}></i>
                                </div>
                                <div className='card-text'>
                                    <h5 className='card-title d-flex text-center'>{item.text}</h5>
                                    <p className='card-bottom-text my-5'>Tap to Launch</p>
                                </div>

                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='statistics-section'>
                <div className='statistics-header'>
                    <div className='statistics-header-text p-1'>
                        <i className='border-end p-2 bi bi-bar-chart-line'></i>
                        <span className='px-3 text-dark'>Statistics</span>
                    </div>

                </div>
                <div className='statistics-container'>
                    {statistics.map((item, index) => (
                        <div key={index} className='card'>
                            <div className=' statistics-card d-flex'>
                                <div className='statistics-card-icon'>
                                    <i className={item.icon}></i>
                                </div>
                                <div className='statistics-card-text'>
                                    <span className='statistics-card-text-number'>{item.text} :</span>
                                    <span className='statistics-card-text-name'>{item.number}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard