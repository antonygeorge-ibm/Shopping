import React, { Component } from 'react';
import {BrowserRouter ,Route ,Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import Cart from './components/Cart';
import Header from './components/Header';
import Orders from './components/Orders';
import {connect} from 'react-redux';
import {firstInit} from './components/actions/shopActions';

class App extends Component {
  
  componentDidMount(){
    console.log("called");
    this.props.firstInit();
}

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/orders" component={Orders}/>
          </Switch> 
        </BrowserRouter> 
      </div>
    );
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
  firstInit:() =>{dispatch(firstInit())},
  // renderData: ()=> {dispatch(renderData())}
  }
}
// export default App;
export default connect(null,mapDispatchToProps)(App)
