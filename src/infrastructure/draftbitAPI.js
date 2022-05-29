import axios from 'axios'

export const putsreqAPI = axios.create({
    baseURL:'https://example-data.draftbit.com/',
    timeout:1000
})