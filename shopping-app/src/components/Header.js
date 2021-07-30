import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutFromShop } from './actions/formAction';
import { searchFor,resetOrder } from './actions/shopActions';



class Header extends Component {


    logoutHandler = () => {
        this.props.logoutFromShop();
        this.props.resetOrder();
        alert("Logged Out Successfully");
    }

    searchFor = () => {
        let searchTerm=document.getElementById("itemSearch").value;
        this.props.searchFor(searchTerm);
        this.forceUpdate();
        console.log(searchTerm);
    }

    render() {
        return (
            <nav className="Header">
                <div className="topnav">
                    <a className="active" ><Link to="/">Home</Link></a>
                    <a ><Link to="/orders">Orders</Link></a>
                    <a ><Link to="/cart"  >My cart</Link></a>
                    <a>{this.props.lr.isloggedIn ?  <Link to="/" onClick={()=>{this.logoutHandler()}}>Logout</Link>: <Link to="/login">Login</Link>}</a>
                    <div className="search-container">
                            <input type="text" id="itemSearch" placeholder="Search Here" name="search" />
                            <button className="searcbut" type="submit" onClick={()=>{this.searchFor()}}> <Link to="/">search</Link></button>
                    </div>
                </div>
                {/* <div className="nav-container">
                   
                    <ul className="hdr">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li>
                            <Link to="/cart"  >My cart</Link>
                        </li>
                        <li>
                        {this.props.lr.isloggedIn ?  <Link to="/" onClick={()=>{this.logoutHandler()}}>Logout</Link>: <Link to="/login">Login</Link>}    
               
            
                        </li>
                        <li><input id="search" className="ipt" placeholder="Search Items" type="text" ></input></li>
                        <li>Search</li>
                    </ul>
                </div> */}
            </nav>


        )
    }
}
const mapStateToProps = (state) => {
    return { lr: state.loginReducer }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFromShop: () => { dispatch(logoutFromShop()) },
        searchFor: (searchTerm)=>{dispatch(searchFor(searchTerm))},
        resetOrder: () => { dispatch(resetOrder()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)