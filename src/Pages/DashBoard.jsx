import dollar from '../assets/dollar-removebg-preview.png';
import order from '../assets/order-removebg-preview.png';
import product from '../assets/newp-removebg-preview.png';
import { LineChart } from '../Component/LineChart';
import { useState, useEffect } from 'react';
import { merchantData } from '../UsersData';
import { normalUserAcquisitions } from '../UsersData';
import { transactionVolume } from '../UsersData';
import { Select } from 'antd';

export const DashBoard = () => {
    // State for selected date range
    const [cusDate, setCusDate] = useState([8, 11]); // Initial range

    // Derived transaction volume based on selected range
    const volume = transactionVolume.slice(cusDate[0], cusDate[1]);

    // State for chart data
    const [userData, setUserData] = useState({
        labels: volume.map(data => data.date),
        datasets: [
            {
                label: 'Transaction Volume',
                data: volume.map(data => data.transactions),
                borderColor: '#8C6FE6',
                fill: false,
                pointBackgroundColor: '#8C6FE6',
            },
        ],
    });

    // Effect to update chart data when `cusDate` changes
    useEffect(() => {
        setUserData({
            labels: volume.map(data => data.date),
            datasets: [
                {
                    label: 'Transaction Volume',
                    data: volume.map(data => data.transactions),
                    borderColor: '#8C6FE6',
                    fill: false,
                    pointBackgroundColor: '#8C6FE6',
                },
            ],
        });
    }, [cusDate]);

    // Total transaction volume
    const totalTransactions = transactionVolume.reduce(
        (sum, current) => sum + current.transactions,
        0
    );

    // Custom date ranges
    const customDate = ['whole year', 'Jan - Apr', 'May - Aug', 'Sep - Dec'];

    // Function to handle date range changes
    const changeChart = (date) => {
        console.log(date);
        if (date === 'whole year') {
            setCusDate([0, 12]);
        } else if (date === 'Jan - Apr') {
            setCusDate([0, 4]);
        } else if (date === 'May - Aug') {
            setCusDate([4, 8]);
        } else {
            setCusDate([8, 12]);
        }
    };

    return (
        <section>
            <div className="container-fluid">
                <h1>Dashboard</h1>
                <main>
                    {/* First Section */}
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-first">
                                <div
                                    style={{
                                        backgroundColor: '#fbceb1',
                                        padding: '10px',
                                        borderRadius: '70%',
                                    }}
                                >
                                    <img src={product} alt="product" />
                                </div>
                                <div>
                                     Regular Users <br /> {normalUserAcquisitions.length}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-first">
                                <div
                                    style={{
                                        backgroundColor: 'lightBlue',
                                        padding: '10px',
                                        borderRadius: '70%',
                                    }}
                                >
                                    <img src={order} alt="order" />
                                </div>
                                <div>
                                    Merchants <br /> {merchantData.length}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-first">
                                <div
                                    style={{
                                        backgroundColor: 'lightGreen',
                                        padding: '10px',
                                        borderRadius: '70%',
                                    }}
                                >
                                    <img src={dollar} alt="dollar" />
                                </div>
                                <div>
                                    Total Transaction Volume <br />
                                    {totalTransactions}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    
                              <h3>Transaction Volume Graph</h3>
                              <Select
                              placeholder="Filter Date Range"
                              style={{ width: '200px', margin: '0' }}
                              onChange={changeChart}
                              >
                              {customDate.map((date, index) => (
                                   <Select.Option key={index} value={date}>
                                        {date}
                                   </Select.Option>
                              ))}
                              </Select>

                         
                              <div
                                   className="d-second"
                                   style={{ padding: '10px', backgroundColor: 'lightBlue' }}
                              >
                                   <LineChart chartData={userData} />
                              </div>
                         
                    
                </main>
            </div>
        </section>
    );
};
