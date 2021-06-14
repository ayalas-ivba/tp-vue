import httpClient from '../httpClient'

let http = httpClient({
    baseURL: process.env.VUE_APP_MUSEOS_URL /* 'https://www.cultura.gob.ar/api/v2.0/museos' process.env.MUSEOS_BASEURL */
})

export default http