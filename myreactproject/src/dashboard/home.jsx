import homeimg from "../assets/images/home.jpg";

const Home=()=>{

    return(
    <>
    <div className="home"></div>
    <img src={homeimg} style={{width:"100%",height:"658px"}}/>
    <h1 style={{position:"absolute",top:"270px",left:"780px",color:"white",fontSize:"52px"}}>Hello ,</h1>
    <h1 style={{position:"absolute",top:"330px",left:"780px",color:"white",fontSize:"52px"}}>My Naame is Kajal</h1>
    <h1 style={{position:"absolute",top:"390px",left:"780px",color:"white",fontSize:"52px"}}>and I am a Java Devloper...</h1>
    </>
   
    )
}
export default Home;