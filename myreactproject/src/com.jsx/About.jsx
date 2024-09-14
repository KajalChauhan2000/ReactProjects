import { Link, Outlet } from "react-router-dom";


const About=()=>{
    
    return(
        <>
        <h1>Welcome to My About Page</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet dicta, hic aut suscipit doloribus? Omnis natus quia architecto <br/>
        voluptatum eveniet possimus unde minima laborum, et libero laudantium reprehenderit hic.

        <hr/>

        <div style={{display:"flex" , justifyContent:"space-around"}}>
            <div style={{width:"20%"}}>
                <Link to="aboutcom">AboutCompany</Link><br/>
                <Link to="aboutpro">AboutProduct</Link><br/>
                <Link to="aboutsell">AboutSelling</Link>
            </div>
           <div style={{width:"80%"}}>
            <Outlet/>
           </div>
        </div>

        </>
    )
}
export default About;