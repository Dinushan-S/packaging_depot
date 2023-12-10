import React from 'react'
import './NavbarStyle.css'
import 'bootstrap';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (

        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
                <div className='d-flex'>

                    <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    I want to..
                                </a>
                                <div class="dropdown-menu bg-white" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#"><i className='bi bi-cash'></i> Make a Sale</a>
                                    <a class="dropdown-item" href="#"><i className='bi bi-search'></i> Search Sales</a>
                                    <a class="dropdown-item" href="#"><i class="bi bi-credit-card"></i> Add New Giftcard</a>
                                    <a class="dropdown-item" href="#"><i class="bi bi-ui-checks-grid"></i> Add new Item</a>
                                    <a class="dropdown-item" href="#"><i class="bi bi-calendar3"></i> End of day</a><hr />
                                    <a class="dropdown-item" href="#"><i class="bi bi-pencil-square"></i> view claims</a>
                                    <a class="dropdown-item" href="#"><i class="bi bi-pencil-square"></i> File a Claim</a><hr />
                                    <a class="dropdown-item" href="#"><i className='bi bi-people-fill'></i> Open Customer Portal</a><hr />
                                    <a class="dropdown-item" href="#"><i className='bi bi-person-fill'></i> Switch user</a><hr />
                                    <a class="dropdown-item" href="#"><i className='bi bi-box-arrow-left'></i> Logout</a>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="navbar-nav mr-auto d-none d-md-flex ">
                    <li className="nav-item active ">
                        <a className="nav-link nav-right rounded-start nav-link-hover" style={{ borderRight: "1px solid #ddd" }} href="/">
                            {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            <i className="bi bi-dropbox"> </i>
                            <span className="sr-only">Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-right" style={{ borderRight: "1px solid #ddd" }} href="/customers">
                            <i className="bi bi-person"> </i>
                            <span className="sr-only">Customer</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-right" href="#">
                            <i className="bi bi-clock"> </i>
                            <span className="sr-only">Sales History</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a style={{ backgroundColor: "#2383c4" }} className="nav-link text-light " href="/sales">
                            Make a Sale
                        </a>
                    </li>
                    <li className="nav-item">
                        <a style={{ backgroundColor: "#253544" }} className="nav-link text-light rounded-end" href="#">
                            {new Date().toLocaleDateString()}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
