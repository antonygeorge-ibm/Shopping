import React ,{ Component } from 'react';
import './Login.css';
import {connect} from 'react-redux';
import { loginToShop } from './actions/formAction';
import { resetQty} from './actions/shopActions';
// import profileImage from '../images/profileImage.jpg'

class Login extends Component
{
    // state = { redirect: null };

    loginHandler = ()=>{

        let usn=document.getElementById("usn").value;
        let psw=document.getElementById("psw").value;
        console.log(usn+psw);
        this.props.loginToShop(usn,psw);
        // if(this.props.lr.isloggedIn)
        // {
        //     alert("Logged In successfully");
        // }
        this.props.resetQty();
        if(psw.length<=8&&psw.length>0){
            document.getElementById("errmsg").innerHTML="Password Length too short";
        }
        else if(psw.length===0||usn.length===0)
        {
            document.getElementById("errmsg").innerHTML="Fields Cannot be Empty";
        }
        else if(this.props.lr.items.usn===usn&&this.props.lr.items.psw===psw){
            alert("Logged In successfully");
            document.getElementById("errmsg").innerHTML="";
            this.props.history.push('/')
        }
        else{
            alert("wrong username or password");
            document.getElementById("errmsg").innerHTML="";
        }
    }


render(){
    return(
        <div className="logo">
            <h2 className="prod">Login Page</h2> 
            <div className="logcont">
                <img width='250' height='250' src='../images/profileImage.jpg' alt="Profile Pic"></img>
            <label>
                <p>Username :</p>
                <input type="text" id="usn" required placeholder="Enter Username" />
            </label>
            <label>
                <p>Password :</p>
                <input type="password" id="psw" required placeholder="Enter Password"/>
                <div id="errmsg"></div>
            </label><br/><br/>
            <button className="loginbtn" type="submit" onClick={()=>{this.loginHandler()}}>Log In</button>
             {/* {this.props.lr.isLoggedIn ?<Redirect to="/"></Redirect> :''} */}
            </div> 
        </div>
    );
    } 
}

const mapStateToProps = (state)=>{ 
    return {lr: state.loginReducer}  
    }

const mapDispatchToProps= (dispatch)=>{
    return{
    loginToShop: (usn,psw)=> {dispatch(loginToShop(usn,psw))},
    resetQty: ()=> {dispatch(resetQty())}
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Login)