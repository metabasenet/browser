//Store data
export const SET_TOKEN = (token) => {
    localStorage.setItem("TOKEN", token);
}
//Get data
export const SET_USER = () => {
    return localStorage.getItem('TOKEN')
}