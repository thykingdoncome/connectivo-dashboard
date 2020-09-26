import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import DoughnutChart from '../charts/DoughnutChart';
import MiniCard from '../commons/MiniCard'
import Profit from '../charts/Profit';


const MainLayout = () => {
    const cardItems = [
        {
            id: 1,
            icon: <TiShoppingCart />,
            label: 'Orders',
            amount: '10,271'
        },
        {
            id: 2,
            icon: <TiShoppingCart />,
            label: 'Orders',
            amount: '10,271'
        },
        {
            id: 3,
            icon: <TiShoppingCart />,
            label: 'Orders',
            amount: '10,271'
        },
        {
            id: 4,
            icon: <TiShoppingCart />,
            label: 'Orders',
            amount: '10,271'
        }
    ]

    const monthlyGrossRevenue = {
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG']
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
    }

    const monthlyGrossRate = {
        options: {
            chart: {
              id: "basic-bar",
              barHeight: '50%'
            },
            xaxis: {
              categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG']
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
    }


    const orderValue = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    }

    const ProfitMargin = [
        {
            id: 1,
            label: 'GROSS PROFIT MARGIN',
            percent: '32.6%'
        },
        {
            id: 2,
            label: 'NET PROFIT MARGIN',
            percent: '12.5%'
        }
    ]

    return (
        <div className="dashboard-content">
            <div className="card-item-wrap">
                {cardItems.map(cardItem => (
                    <MiniCard key={cardItem.id} label={cardItem.label} icon={cardItem.icon} amount={cardItem.amount} />
                ))}
            </div>

            <div style={{ textAlign: 'center', color: 'rgb(169, 91, 169)', marginTop: '4rem' }}><h2>GAINS</h2></div>

            <div className="card-item-wrap" style={{ marginTop: '4rem' }}>
                {cardItems.map(cardItem => (
                    <MiniCard key={cardItem.id} label={cardItem.label} amount={cardItem.amount} />
                ))}
            </div>

            <div className="chart-wrapper" style={{ marginTop: '4rem' }}>
                <div className="top-charts">
                   <BarChart options={monthlyGrossRevenue.options} series={monthlyGrossRevenue.series} />

                    <DoughnutChart options={orderValue.options} series={orderValue.series} />
                </div>
                <div className="bottom-charts">
                    <div className="btm-chrt-wrap">
                        <LineChart options={monthlyGrossRate.options} series={monthlyGrossRate.series}/>

                        <div className="profit-wrap">
                            {ProfitMargin.map(margin => (
                                <Profit key={margin.id} label={margin.label} percent={margin.percent} />
                            ))}
                        </div>
                    </div>
                    <div className="purple-blank">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout
