import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from '../store/store';


const LoginForm = () => {
  
    const {setUsername,setPassword,setBirthDay} = useContext(Context);
    
    const onChangeUserName=(e) => {setUsername(e.target.value)}
    const onChangePassword=(e) => {setPassword(e.target.value)}
    const onChangeBirthDay=(e) => {setBirthDay(e.target.value)}

    return ( 
    <div className="login">
        <h1>Login Form</h1>
        <form className="form">
            <label className="lable">
                Username
            </label><br/>
            <input type="text" onChange={onChangeUserName}/>

            <label className="lable">
                Password
            </label><br/>     
            <input type="password" onChange={onChangePassword} />

            <label className="lable">
                BirthDay
            </label><br/>     
            <input type="date" onChange={onChangeBirthDay}/>
            <br/>
             <div className="link">
            <Link to='/Home'><button type="submit">Submit</button></Link>
             </div>
        </form>
    </div> 
    );
}
 
export default LoginForm;