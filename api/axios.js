import axiosMain from 'axios'

const axios = axiosMain.create({
    baseURL: process.env.REACT_APP_API_URL
})

export default axios