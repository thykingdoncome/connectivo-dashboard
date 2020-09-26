import React from 'react'
import Chart from 'react-apexcharts'

const LineChart = ({ options, series }) => {
    return (
        <div className="mixed-chart">
            <h3>Monthly Gross Rate %</h3>
            <Chart
                options={options}
                series={series}
                type="line"
                width="500"
            />
        </div>
    )
}

export default LineChart
