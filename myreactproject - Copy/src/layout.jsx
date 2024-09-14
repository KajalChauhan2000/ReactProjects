import { Link , Outlet } from "react-router-dom";


const Layout=()=>
{
    return(
        <>
        
         <Link to="home">Home</Link>
         <Link to="insert" >Insert</Link>
         <Link to="display">Display</Link>
         <Link to="update">Update</Link>
         <Link to="search">Search</Link>
       
         <hr size="3" color="black"/>
         
         <Outlet />


         <hr size="3" color="black"/>
         
        </>
    )
}
export default Layout;
