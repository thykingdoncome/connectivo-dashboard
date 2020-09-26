import React from 'react'
import './common.scss'

const MiniCard = ({ icon, amount, label }) => {
    return (
        <div className="mini-card">
            <span>{icon}</span>
            <div>
                <h5>{amount}</h5>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default MiniCard
