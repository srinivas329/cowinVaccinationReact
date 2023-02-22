// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiCalls = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {
    lastSevenDaysData: [],
    detailsByAge: [],
    detailsByGender: [],
    apiStatus: apiCalls.loading,
  }

  componentDidMount() {
    this.getCoWinDetails()
  }

  getCoWinDetails = async () => {
    this.setState({apiStatus: apiCalls.loading})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedDate = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      const {
        last7DaysVaccination,
        vaccinationByAge,
        vaccinationByGender,
      } = updatedDate
      const updatedLast7DaysVaccination = last7DaysVaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))

      this.setState({
        lastSevenDaysData: updatedLast7DaysVaccination,
        detailsByAge: vaccinationByAge,
        detailsByGender: vaccinationByGender,
        apiStatus: apiCalls.success,
      })
    } else {
      this.setState({apiStatus: apiCalls.failure})
    }
  }

  getFailureView = () => (
    <div className="fail-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="fail-img"
      />
      <h1 className="fail-text">Something went wrong</h1>
    </div>
  )

  getLoader = () => (
    <div data-testid="loader" className="fail-bg">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  getAllGraphs = () => {
    const {lastSevenDaysData, detailsByAge, detailsByGender} = this.state
    return (
      <div>
        <div>
          <VaccinationCoverage lastSevenDaysData={lastSevenDaysData} />
        </div>
        <div>
          <VaccinationByGender detailsByGender={detailsByGender} />
        </div>
        <div>
          <VaccinationByAge detailsByAge={detailsByAge} />
        </div>
      </div>
    )
  }

  getFinalResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiCalls.success:
        return this.getAllGraphs()
      case apiCalls.failure:
        return this.getFailureView()
      case apiCalls.loading:
        return this.getLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="cards">
          <div className="logo-tab">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
              alt="website logo"
              className="logo"
            />
            <h1 className="logo-name">Co-WIN</h1>
          </div>
          <h1 className="title">CoWIN Vaccination in India</h1>
          {this.getFinalResult()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
