export const getToken = () => {
    const accessToken =  localStorage.getItem('accessToken');
    return accessToken
}


export const setToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
}

export const removeToken = () => {
    localStorage.removeItem('accessToken');
}