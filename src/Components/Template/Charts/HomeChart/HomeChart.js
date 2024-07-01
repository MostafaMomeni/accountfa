import React, { PureComponent } from 'react';
import style from "./HomeChart.module.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';


export default function HomeChart() {

    const data = [
        {
          name: 'فروردین',
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'اردیبهشت',
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'خرداد',
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'تیر',
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'مرداد',
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'شهریور',
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'مهر',
          pv: 4300,
          amt: 2100,
        },
      ];


  return (
    <div className={style.parent}>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
