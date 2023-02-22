// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {detailsByGender} = props
  console.log(detailsByGender)

  return (
    <div className="coverage-bg">
      <h1 className="coverage-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="40%"
            data={detailsByGender}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="60%"
            dataKey="count"
          >
            <Cell name=" Male" fill="#f54394" />
            <Cell name=" Female" fill="#5a8dee" />
            <Cell name=" Others" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" verticalAlign="middle" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
