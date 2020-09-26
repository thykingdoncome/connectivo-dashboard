import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiDashboardFill, RiBarcodeBoxLine, RiSettings5Fill, RiNewspaperFill } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { TiShoppingCart } from 'react-icons/ti'
import { GoPlusSmall } from 'react-icons/go'

const Sidebar = () => {
    return (
        <nav className="dashboard-sidebar">
            <div className="sb-top-section">
                <div><span>Connect Shop</span><GoPlusSmall /></div>
            </div>
            <ul className="sb-items">
                <li> <NavLink exact to='/' activeClassName="selected"><RiDashboardFill /> <span>Dashboard</span></NavLink> </li>
                <li> <NavLink exact to='/upload' activeClassName="selected"><RiNewspaperFill /> <span>Upload Feed</span></NavLink> </li>
                <li><NavLink exact to='/market' activeClassName="selected"><HiOutlineShoppingBag /> <span>Add Marketplaces</span> </NavLink></li>
                <li><NavLink exact to='/products' activeClassName="selected"><RiBarcodeBoxLine /> <span>Products</span></NavLink> </li>
                <li><NavLink exact to='/orders' activeClassName="selected"><TiShoppingCart /> <span>Orders</span></NavLink> </li>
                <li><NavLink exact to='/settings' activeClassName="selected"><RiSettings5Fill /> <span>Settings</span></NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar
