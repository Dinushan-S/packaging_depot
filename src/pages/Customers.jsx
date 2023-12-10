import React from 'react'
import { Link } from 'react-router-dom'
import { BreadCrums } from '../components/BreadCrums';

const Customers = () => {
    const pathnames = window.location.pathname.split('/').filter((x) => x);
    return (
        <div>
            <div className=' d-flex'>
                <h2 className='mt-4'>
                    <i className='bi bi-person-fill' style={{ color: "#356ba1" }}></i>
                    <span>Customer </span>
                </h2>
            </div>
            <div className='page-header d-flex'>
                <i className='bi bi-house-fill'></i>
                <BreadCrums pathnames={pathnames} />
            </div>
        </div>
    )
}

export default Customers