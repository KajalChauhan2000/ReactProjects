import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const name = localStorage.getItem("uname");
const email = localStorage.getItem("email");

const DashBoard=()=>
    {
        const navigate = useNavigate();

        const userNoSet=()=>{
            
            if(!name)
                {
                   navigate("/login");
                }
        }
        useEffect(()=>{
            userNoSet();
        }, [])

        const logout=()=>{

            localStorage.clear();
            navigate("/login");
        }
        return(
            <>
            <h1>DashBoard</h1>
            <h2>Welcome : {name} <br/> Email : {email} <br/> <a href="#" onClick={logout}> Logout </a></h2>
            </>
        )
    }
    export default DashBoard;