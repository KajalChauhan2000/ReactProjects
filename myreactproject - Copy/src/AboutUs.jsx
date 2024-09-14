import myimg1 from "./assets/images/Snapchat-182413210.jpg"

const About=()=>
{
    return(
        <>
        <h1 className="about"></h1>
        <h1 style={{position:"absolute",top:"100px",left:"280px",fontSize:"48px",color:"black",textDecoration:"underline"}}>Let's Introduce Me</h1>
        <h2 style={{position:"absolute",top:"210px",left:"100px",fontSize:"36px",color:"black"}}>My Name is Kajal Chauhan but generally called by <br/> as Kaju.
             I am from Bhopal. I have Compeleted my <br/>graduation in goverment geetanjali girls Collage. <br/> I  have a small family. I am capable to do well under <br/> any stressful condition
            and I am a quick learner.<br/> I like to Listen music and outdoor actvities. and I <br/> want to become a web developer in future.
        </h2>
        
        <hr size="5" color="black" style={{position:"relative",top:"-5px"}}/>
         <h2 style={{textAlign:"center",fontSize:"30px",position:"relative",top:"-28px"}}>www.mycollage.com</h2>
         <div className="div">
         <img src={myimg1} className="myimg" />
         </div>
        </>
    )
}
export default About;
