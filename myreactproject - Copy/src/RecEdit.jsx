
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const RecEdit=()=>{

    const [mydata , setMydata]=useState({});

    const {id} = useParams();

    const loadData=()=>{
        
        let api = `http://localhost:3000/students/${id}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }

    useEffect(()=>{
        loadData();
   }, []);



  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setMydata(values=>({...values,[name]:value}));
  }

  const editSave=()=>{
    let url = `http://localhost:3000/students/${id}`;
    axios.put(url , mydata).then((res)=>{
        alert("Record Successfully Updated!!!");
    })
  }

    return(
        <>
       <h1>Edit Record : </h1>
       Enter rollno : <input type="text" name="rollno" value={mydata.rollno} onChange={handleInput}/>
       <br/>
       Enter Name : <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
       <br/>
       Enter City : <input type="text" name="city" value={mydata.city} onChange={handleInput}/>
       <br/>
       Enter Fees : <input type="text" name="fees" value={mydata.fees} onChange={handleInput} />
       <br/>
       <button onClick={editSave}>Update now!</button>
        </>
    )
}
export default RecEdit;