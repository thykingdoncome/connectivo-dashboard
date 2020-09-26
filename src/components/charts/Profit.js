import React from 'react'
import './charts.scss'

const Profit = ({ label, percent }) => {
    return (
        <div className="profit">
            <p>{label}</p>
            <p>{percent}</p>
        </div>
    )
}

export default Profit
