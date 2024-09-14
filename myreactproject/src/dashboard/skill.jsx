import back from "../assets/images/about.png";
import front from "../assets/images/front.jpg";


const Skill=()=>{

    return(
        <>
         <div style={{height:"80px",width:"100%", backgroundColor:"pink" ,margin:"-100px 0px 0px 0px "}}></div>
         <img src={back} className="backend"/>
         <h1 className="bs">My Backend Skills Are :-</h1>
         <div className="blang">C , C++ , Core Java , Advanced Java , <br/>MySql etc.</div>
         
         
         <img src={front} className="frontend"/>
         <h1 className="fs">My frontend Skills Are :-</h1>
          <div className="flang">Html , Css , Java Script , ReactJS etc.</div>
         
        </>
    )
}
export default Skill;