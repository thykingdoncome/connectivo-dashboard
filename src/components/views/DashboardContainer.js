import React from 'react'
import MainLayout from '../layout/MainLayout'
import Sidebar from '../layout/Sidebar'

const DashboardContainer = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
           <MainLayout />
        </div>
    )
}

export default DashboardContainer
