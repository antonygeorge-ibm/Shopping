import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Bill.css';
import { checkout,resetQty } from './actions/shopActions';

class Bill extends Component {

    checkoutHandler = ()=>{
       // this.props.addToCart(id);
        this.props.checkout(this.props.its);
        this.forceUpdate();
        this.props.resetQty();
        alert("Checkout Successful")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }


    render() {
        return (
            <div>
                <h3 className="prod">Bill</h3>
                <table id="customers">
                <tr className="tabletop">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Cost</th>
                            </tr>
                    {this.props.its.map((product) => {
                        //if (product.quantity >= 1) {
                            return (<tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price*product.quantity}</td>
                            </tr>
                            )
                        // }
                        // else{
                        //     return '';
                        // }
                    })}
                </table>
                {this.props.dts.total>0 ?<div><h4>Total:{this.props.dts.total}</h4><button onClick={()=>{this.checkoutHandler()}}>Checkout</button></div>:''}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{ 
    return {its: state.dataReducer.itemsInCart,
            dts: state.dataReducer   }  
    }

const mapDispatchToProps= (dispatch)=>{
        return{
        checkout: (prevOrderData)=> {dispatch(checkout(prevOrderData))},
        resetQty: (id)=> {dispatch(resetQty(id))}
    }
    }    

export default connect(mapStateToProps,mapDispatchToProps)(Bill)