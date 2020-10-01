class AlertService {
  async getAlerts() {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/alert`, {
      mode: 'no-cors',
    })
    debugger
    return response
  }
}

const alertService = new AlertService()
export default alertService
