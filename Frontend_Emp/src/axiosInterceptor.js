import axios from "axios"
const axiosInstanceUser=axios.create({
    baseURL:'http://localhost:5000'
})
axiosInstanceUser.interceptors.request.use((config)=>{
    const user_accessToken = localStorage.getItem('userToken')
    if(user_accessToken){
        if(config){
            config.headers.userToken=user_accessToken
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})

const axiosInstanceAdmin=axios.create({
    baseURL:'http://localhost:5000'
})
axiosInstanceAdmin.interceptors.request.use((config)=>{
    const admin_accessToken = localStorage.getItem('adminToken')
    console.log('admin_accessToken is -')
    console.log(admin_accessToken)
    if(admin_accessToken){
        if(config){
            config.headers.adminToken=admin_accessToken
        }
    }
    return config;
},(error)=>{
    return Promise.reject(error)
})

export  {axiosInstanceUser,axiosInstanceAdmin}