import Form from 'react-bootstrap/Form';

const Contact=()=>{
  
    return(
        <>
         <div style={{height:"80px",width:"100%", backgroundColor:"pink" ,margin:"-100px 0px 0px 0px "}}></div>
         <div className="headcon">Contact Us</div>
         <img className="contact" src="https://media.istockphoto.com/id/1252809376/photo/japanese-man-at-hand-using-a-smartphone.jpg?s=612x612&w=0&k=20&c=3zUF1981mbU4mN3gmQ8IYWU96HAs1pPEN89WYKw5NAQ="/>
         <div>
         <Form className="form">
         <Form.Group className="mb-3" >
        <Form.Label>Enter Your Name :</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter Email address :</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Subject :</Form.Label>
        <Form.Control type="text" placeholder="subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Message :</Form.Label>
        <Form.Control type="textarea"/>
      </Form.Group>
      <button className="button">Submit</button>
    </Form>
         </div>
        </>
    )
}
export default Contact;