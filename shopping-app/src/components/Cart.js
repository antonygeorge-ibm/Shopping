import React ,{ Component }from 'react';
import Bill from './Bill';
import './Cart.css';
import {connect} from 'react-redux';
import { addToCart ,remSngItem,remItemComp} from './actions/shopActions';

class Cart extends Component
{
// function caller(){
//     var ajax = new XMLHttpRequest();
//     var method ="GET";
//     var url = "C:\\xampp\\htdocs\\data.php";
//     var async= true;

//     ajax.open(method,url,async);

//     ajax.send();

//     //receiving response
//     ajax.onload=function()
//     {
//         alert("Inside");
//         if(this.readyState === 4 && this.status===200)
//         {
//             alert(this.responseText);
//         }
//     }
// }

//const isInCart = () =>{



// const Cart = () =>{
//     return(
//         <div className="cart-wrapper">
//         <Header />
//         <h2>Cart</h2>
//         {this.props.its.map((product)=> {
//                 return(<div className="prods" key={product.id}>
//                <img src={product.image} alt={product.name} />
//                <h3>Name:{product.name}</h3>
//                <p>Price:{product.price}</p>
//                 <div>
//                     <button className="addtocart" >Add to Cart</button>
//                 </div>
//                </div>
//                ) 
//             })}
//         </div>
//     );
// }

aTCclick = (id)=>{
    this.props.addToCart(id);
    this.forceUpdate();
}

removeSingleItem = (id)=>{
    this.props.remSngItem(id);
    this.forceUpdate();
}

remItemComp = (id)=>{
    this.props.remItemComp(id);
    this.forceUpdate();
}

render(){
    return(
        <div>
           
            <div className="row">
            <h2 className="prod">Cart</h2>
            <div className="column pers" >
            {this.props.its.length===0 ?  <h3 className="oops">Oops,No Items In Cart</h3>:'' }
            {this.props.its.map((product)=> {
                
                // if(product.quantity>=1){
                return(
                <div className="prods" key={product.id}>
               <img height='200rem' width='250rem' src={product.image} alt={product.name} />
               <h3>Name:{product.name}</h3>
               <p>Price:{product.price}</p>
               <p>Quantity:{product.quantity}</p>
                <div>
                <button className="addtocart" onClick={()=>{this.aTCclick(product.id)}}>+</button>
                    Add/Subtract
                <button className="addtocart" onClick={()=>{this.removeSingleItem(product.id)}}>-</button>
                </div>
                <button className="addtocart" onClick={()=>{this.remItemComp(product.id)}}>Remove From Cart</button>
               </div>
               ) 
                // }

                // else{
                //     return null;
                // }
            }
            )}
            </div>
            <Bill className="column right" props={this.props}></Bill>
            </div>
        </div>
    );}
}



const mapStateToProps = (state)=>{ 
    return {its: state.dataReducer.itemsInCart   
    }  
    }

    const mapDispatchToProps= (dispatch)=>{
        return{
        addToCart: (id)=> {dispatch(addToCart(id))},
        remSngItem: (id)=> {dispatch(remSngItem(id))},
        remItemComp: (id)=> {dispatch(remItemComp(id))}
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Cart)