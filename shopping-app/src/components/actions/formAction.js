export const loginToShop= (username,password)=>{
    return{
        type: 'Login', 
        username,
        password

    }
}

export const logoutFromShop= ()=>{
    return{
        type: 'Logout'
    }
}