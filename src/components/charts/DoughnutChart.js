import React from 'react'
import Chart from 'react-apexcharts'

const DoughnutChart = ({ series, options }) => {
    return (
        <div className="donut">
            <h3>Order Value</h3>
            <Chart options={options} series={series} type="donut" width="380" />
        </div>
    )
}

export default DoughnutChart
