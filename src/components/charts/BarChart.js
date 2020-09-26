import React from 'react'
import Chart from "react-apexcharts";
import './charts.scss'

const BarChart = ({ options, series }) => {


    return (
        <div className="mixed-chart bar">
            <h3>Monthly Gross Revenue</h3>
            <Chart
            options={options}
            series={series}
            type="bar"
            width="1000"
            height="400"
            />
        </div>
    )
}

export default BarChart
