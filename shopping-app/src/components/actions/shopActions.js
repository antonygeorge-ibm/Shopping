

const options = (data) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};


export const addToCart= (id)=>{
        return{
            type:'ADD_TO_CART',
            id
        }
}

export const firstInit= ()=>{
    return dispatch => {
        console.log("this is val1");
        fetch('/tasks')
        .then(res => res.json())
        .then(res => {
            const items=res;
            console.log(items);
            dispatch({ type: 'FIRST_INIT' ,items})
        })
    };
}

export const prevInit= ()=>{
    return dispatch => {
        fetch('/previous')
        .then(res => res.json())
        .then(res => {
            const itemsPrev=res;
            console.log(itemsPrev);
            dispatch({ type: 'PREV_INIT' ,itemsPrev})
        })
    };
}

export const remSngItem= (id)=>{
    return{
        type: 'REM_SNG_ITEM', 
        id: id
    }
}

export const remItemComp= (id)=>{
    return{
        type: 'REMOVE_ITEM', 
        id: id
    }
}

// export const firstInit= ()=>{
//     return dispatch => {
//         console.log("this is val1");
//         fetch('/tasks')
//         .then(res => res.json())
//         .then(res => {
//             const items=res;
//             console.log(items);
//             dispatch({ type: 'FIRST_INIT' ,items})
//         })
//     };
// }

export const checkout= (prevOrderData)=>{
    return dispatch=>{
        console.log(prevOrderData);
        fetch('/prevOrders',options(prevOrderData))
        .then(res => {
        const items=res;
        console.log(items);
        dispatch({ type: 'CHECKOUT'})
        })
        // type: 'CHECKOUT'
    }
};

export const resetQty= ()=>{
    return{
        type: 'RESETQTY'
    }
}

export const setQty= ()=>{
    return{
        type: 'SETQTY'
    }
}

export const nxtPage= ()=>{
    return{
        type: 'NEXTPAGE'
    }
}

export const searchFor= (searchTerm)=>{
    return{
        type: 'SEARCHFOR',
        searchTerm
    }
}

export const resetOrder= ()=>{
    return{
        type: 'RESETORDER'
    }
}

export const renderData= ()=>{
    return{
        type: 'RESETORDER'
    }
}