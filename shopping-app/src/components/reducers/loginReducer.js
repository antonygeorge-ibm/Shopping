const logdata = {
    items: {
        id: 1,
        usn: 'john@email.com',
        name: 'John',
        psw: 'password123',
    },
    isloggedIn: false
}

const loginReducer = (state = logdata, action) => {
    if (action.type === 'Login') {
        console.log("Inside Log Reducer"+action.username+state.items.usn+action.password+state.items.psw);
        if (action.username === state.items.usn && action.password === state.items.psw) {
            console.log("entered true")
            state.isloggedIn=true;
            let items=state.items;
            return  { items,isloggedIn: state.isloggedIn}
        }
        else {
            return state 
        }
    }
    else if(action.type==='Logout'){
        state.isloggedIn=false;
            return  { items: state.items,
            isloggedIn: state.isloggedIn} 
    }
    else{
        return state 
    }

}

export default loginReducer;