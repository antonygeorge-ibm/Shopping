
const data ={
    items: [],
    total: 0,
    itemsInCart:[],
    orders:[],
    toBeDisp:[],
    page:1,
    searchFor: '',
    disable:false
}

const dataReducer=(state=data ,action)=>{
    console.log(action.id);
    switch(action.type){
        case 'FIRST_INIT':
            {
                return{
                    ...state, items: action.items
                }

        }
        case 'PREV_INIT':
            {
                return{
                    ...state, orders: action.itemsPrev
                }

        }
         case 'ADD_TO_CART':
             {
            let currentCart= state.items.find(item=> item.id===action.id);
            let prevCart=state.itemsInCart.find(item=> item.id===action.id);
            console.log(state.total);
            if(prevCart){
                prevCart.quantity=prevCart.quantity+1;
                return {
                    ...state, total: state.total + currentCart.price                   
                }
            }
            else{
                currentCart.quantity=1;
                return {
                    ...state, total: state.total + currentCart.price ,
                    itemsInCart : [currentCart, ...state.itemsInCart]
                    }
                }}
        case 'REM_SNG_ITEM':{
            let currentCart= state.items.find(item=> item.id===action.id);
            if(currentCart.quantity>1){
                currentCart.quantity=currentCart.quantity-1;
                return {
                    ...state, total: state.total - currentCart.price 
                      }
            }
            else if(currentCart.quantity===1){
                currentCart.quantity=0;
                let itemsToCheck=state.itemsInCart
                let posn = itemsToCheck.findIndex(x=>x.id===action.id);
                itemsToCheck.splice(posn,1);
                
                return { 
                    ...state, total: state.total - currentCart.price,
                    itemsInCart: itemsToCheck
                    }
                }
            else{
                currentCart.quantity=0;
                return {
                    ...state
                    }
            }
            }
        case 'REMOVE_ITEM':{
            let currentCart= state.items.find(item=> item.id===action.id);
            let temp=currentCart.quantity;
            currentCart.quantity=0; 
            let itemsToCheck=state.itemsInCart;
            let posn = itemsToCheck.findIndex(x=>x.id===action.id);
            itemsToCheck.splice(posn,1);
                return {
                    ...state, total: state.total - currentCart.price*temp 
                    }     
                }

        case 'CHECKOUT':{
            let finalOrder=JSON.parse(JSON.stringify(state.itemsInCart))
            finalOrder.tota=state.total;
            console.log("finalorder"+finalOrder[0].quantity);
            return{
                ...state,itemsInCart:[],total:0
            }
        }

        case 'RESETQTY':{
             let fixed=state.items;
             console.log("reset called")
             fixed.map(product =>product.quantity=0);
             return {...state,items:fixed};
        }
        
        case 'SETQTY':{
            let fixed=state.items;
            fixed.map(product =>product.quantity=0);
            return {...state};
        }

        case 'NEXTPAGE':{
            let pageno=state.page+1;
            return {...state,page:pageno};
        }

        case 'SEARCHFOR':{
            return {...state, searchFor:action.searchTerm};
        }

        case 'RESETORDER':{
            return {...state,orders:[],itemsInCart:[],total:0};
        }

        case 'RENDERDATA':{
            var arrOfItems=[];
            var nxtItem=[];
            var button=false;
            function checkIfMatch(nameObj) {
                return nameObj.name===state.searchFor
            }
            if(state.searchFor==='')
            {
                arrOfItems=state.items;
            }
            else{
                arrOfItems=state.items.filter(checkIfMatch,this);
            }
             nxtItem=arrOfItems.slice(0+(state.page-1)*5,(state.pg*5-1));
            if(nxtItem.length<5){
                button=true;
            }
            return{...state,toBeDisp:[...state.toBeDisp,nxtItem],disable:button}

        }

        default :
            return state;
    }
}


export default dataReducer;