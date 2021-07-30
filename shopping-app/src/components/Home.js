import React, { Component } from 'react';
import './Login.css';
import {connect} from 'react-redux';
import { addToCart,firstInit,nxtPage ,resetQty} from './actions/shopActions';

class Home extends Component {
    // const prod=data;
    // const [cartItems , setCartItems]=useState([]);
    // const exist =cartItems.find(x=>x.id===prod.id);
    // const onAdd= (product) =>{
    //     setCartItems([...cartItems,{...product, qty:1}])
    // }
    aTCclick = (id)=>{
        this.props.addToCart(id);
        this.forceUpdate();
    }


    nxtPage= ()=>{
        this.props.nxtPage();
        this.forceUpdate();
    }

    // componentWillUnmount(){
    //     console.log("unmountedaaaaaaaaasdd")
    // }

    // renderData = ()=>{
    //     this.props.renderData();
    //     this.forceUpdate();
    // }

    render(){
      //uncomment if action doesnt work  
        var arrOfItems;
        console.log("filter func")
        function checkIfMatch(nameObj) {
            console.log("filter func")
            return nameObj.name===this.props.sf
        }
        if(this.props.sf==='')
        {
            console.log("1st try"+this.props.sf)
            arrOfItems=this.props.its;
        }
        else{
            arrOfItems=this.props.its.filter(checkIfMatch,this);
            console.log(arrOfItems);
        }
        var nxtItem=arrOfItems.slice(0,(this.props.pg*5));
        // {this.renderData()}
        return(
        
        <div className="block">



            <h2 className="prod">Products</h2>
            
            <div className="person">
            {
            nxtItem.map((product)=> {
                console.log(product.quantity)
                return(<div className="prods" key={product.id}>
               <img height='200rem' width='250rem' src={product.image} alt={product.name} />
               <h3>Name:{product.name}</h3>
               <p>Price:{product.price}</p>
               <div>

                 {product.quantity===0&&this.props.dts.isloggedIn=== true ? <button className="addtocat" onClick={()=>{this.aTCclick(product.id)}} >Add to Cart</button> : ''}    
                </div>
                </div>
               ) 
            })}
            {/* <button class="ldmr" onClick={()=>{this.nxtPage()}}>Load More</button> */}
            </div>
            {nxtItem.length%5!==0 /*||nxtItem.length===10}*/ ?  <h3>No more Items to display</h3>: <button className="ldmr" onClick={()=>{this.nxtPage()}}>Load More</button>}
            
             {/* {!this.props.dam.disable ?  <h3>No more Items to display</h3>: <button className="ldmr" onClick={()=>{this.nxtPage()}}>Load More</button>}
             */}
        </div>
    );
    }
}

// const Button =()=> {
//     if(product.quantity==0){
//         return true}
//     else{
//         return false
//     }
// }
//     {
//     return(
//     <div>
//         <button className="addtocart" onClick={()=>{this.aTCclick(product.id)}} >Add to Cart</button>
//     </div>);
//     }
//     else{
//         return(
//         <div>
//             Added To Cart
//         </div>);
//     }
// }
const mapStateToProps = (state)=>{ 
    return {its: state.dataReducer.items,
            dts: state.loginReducer,
        pg:state.dataReducer.page,
        sf:state.dataReducer.searchFor}
        // fin:state.dataReducer.toBeDisp,
        // dam:state.dataReducer}  
    }

const mapDispatchToProps= (dispatch)=>{
    return{
    addToCart: (id)=> {dispatch(addToCart(id))},
    nxtPage: ()=> {dispatch(nxtPage())},
    firstInit:() =>{dispatch(firstInit())},
    resetQty: ()=> {dispatch(resetQty())}
    // renderData: ()=> {dispatch(renderData())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)