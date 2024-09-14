import img from "../assets/images/about.png";

const About=()=>{

    return(
        <>
         <div style={{height:"80px",width:"100%", backgroundColor:"pink" ,margin:"-100px 0px 0px 0px "}}></div>
        <h1 className="about"></h1>
        <h1 className="intro">Let's Introduce Me</h1>
        <p style={{position:"absolute",top:"210px",left:"100px",fontSize:"34px",color:"#4f092c",fontWeight:"bold",fontFamily:"initial",fontStyle:"italic"}}>
            My Name is Kajal Chauhan but generally called by <br/> as Kaju.
             I am from Bhopal.I have Compeleted my <br/> graduation in goverment geetanjali girls Collage.<br/> 
             I have a small family. I am capable to do well under <br/> any stressful condition
             and I am a quick learner. I <br/> like to Listen music and outdoor actvities. 
             and I <br/> want to become a web developer in future.
             <img src={img} className="aboutimg"/>
        </p>
        

        </>
    )
}
export default About;