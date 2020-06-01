const apiUrlByEnv = {
    local: 'http://localhost:7000/dev',
    staging: 'https://bfybqjkxj4.execute-api.us-east-1.amazonaws.com/dev'
}

export const getBaseURL = () => apiUrlByEnv[process.env.REACT_APP_ENV!] || apiUrlByEnv.staging 
