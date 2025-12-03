const { default: axios} = require("axios");

export const BASE_URL = "https://proconnect-2ptm.onrender.com/"

export const clientServer = axios.create({
    baseURL: BASE_URL,
})