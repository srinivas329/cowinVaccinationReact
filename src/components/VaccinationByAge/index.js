// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {detailsByAge} = props
  console.log(detailsByAge)

  return (
    <div className="coverage-bg">
      <h1 className="coverage-heading">Vaccination by Age</h1>
      <ResponsiveContainer width="80%" height={500}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={detailsByAge}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="45-60" fill="#64c2a6" />
            <Cell name="Above 60" fill=" #a3df9f" />
          </Pie>
          <Legend iconType="Circle" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
