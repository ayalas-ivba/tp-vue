import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_ORGANISMOS_URL
})

export default http