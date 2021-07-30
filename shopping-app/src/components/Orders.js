import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Bill.css';
import {prevInit} from './actions/shopActions';

class Orders extends Component {

    componentDidMount(){
        this.props.prevInit();
    }

    render() {
        var total
        var index=1;
        return (
            <div>
                <h2 className="prod">Previous Orders</h2>
                <a>{this.props.its.length===0 ?  <h3 className="noord">No Previous Orders Yet</h3>:'' }</a>
    
                    {
                    this.props.its.map((allOrders) => {
                        total=0
                        return(
                            
                            <div>
                                <h4>Order No:{index++}</h4>
                        <table id="customers">
                        <tr className="ordname">
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Cost</th>
                        </tr>
                        {allOrders.pastOrds.map((product)=>{
                            total+=product.price*product.quantity
                            console.log(product.name)                
                            return (<tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price*product.quantity}</td>
                            </tr>
                            )})}
                            </table>
                    <h4>Total:{total}</h4>
                </div>
                        )
                    })}
                </div>
        )
    }
}

const mapStateToProps = (state)=>{ 
    return {its: state.dataReducer.orders,
            dts: state.dataReducer,
               }  
    }

const mapDispatchToProps= (dispatch)=>{
        return{
        prevInit:() =>{dispatch(prevInit())},
        // renderData: ()=> {dispatch(renderData())}
        }
      }

export default connect(mapStateToProps,mapDispatchToProps)(Orders)