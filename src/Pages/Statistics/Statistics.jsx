import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import { PieChart, Pie, Cell } from 'recharts';



const Statistics = () => {

    const donationAll = useLoaderData()
    const totalPrice = donationAll.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

    const [savedItem, setSavedItem] = useState([])
    useEffect(() => {
        const savedDonations = []
        const savedIDs = getStoredDonation()

        if (donationAll.length > 0) {
            for (const id of savedIDs) {
                const donation = donationAll.find(donation => donation.id == id)
                savedDonations.push(donation)
            }
        }
        setSavedItem(savedDonations)

    }, [donationAll])

    const donatedPrice = savedItem.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);

    const data = [
        { name: 'Total Price', value: totalPrice },
        { name: 'Donated Price', value: donatedPrice },
    ];

    const COLORS = ['#0088FE', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div>
            <PieChart className='mx-auto' width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex justify-center gap-16 text-xl font-bold text-black'>
                <div className='flex gap-4 items-center'>
                    <h3>Total Price</h3>
                    <div className='bg-[#0088FE] h-4 w-24'></div>
                </div>
                <div className='flex gap-4 items-center'>
                    <h3>Donated Price</h3>
                    <div className='bg-[#FF8042] h-4 w-24'></div>
                </div>
            </div>
        </div >
    );
};


export default Statistics;






