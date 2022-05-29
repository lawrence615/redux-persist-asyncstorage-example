import axios from 'axios'

import { BASE_URL } from '@env';

export const putsreqAPI = axios.create({
    baseURL:BASE_URL,
    timeout:1000
})