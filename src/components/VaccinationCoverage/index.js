// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {lastSevenDaysData} = props
  console.log(lastSevenDaysData)

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-bg">
      <h1 className="coverage-heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="80%" height={500}>
        <BarChart
          width={1000}
          height={300}
          data={lastSevenDaysData}
          margin={{top: 5}}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 0.5,
            }}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0.5,
            }}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose1" name=" Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose2" name=" Dose 2" fill=" #f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
