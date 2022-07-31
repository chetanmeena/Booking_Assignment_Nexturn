import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";

const Signin = (props)=>
{
    return(
        <div>
           <NavBar/>
            <LoginForm />
        </div>
    );
}
export default Signin;