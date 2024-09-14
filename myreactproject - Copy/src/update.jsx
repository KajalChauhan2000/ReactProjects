import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import editimg from "./assets/images/edit.png";
import delimg from "./assets/images/delete.png";


const Update=()=>
{
    const [mydata, setMydata] = useState([]);

    const navigate = useNavigate();

    const loadData=()=>{

        let url="http://localhost:3000/students";

        axios.get(url).then((res)=>{
             
            setMydata(res.data)
        });
    }

    useEffect(()=>{

        loadData();
    },[]);

    const delRec=(id)=>{
        let api = `http://localhost:3000/students/${id}`;

        axios.delete(api).then((res)=>{
            alert("Record Successfully Deleted!!!");
            loadData();
        });
    }
   

    const RecUpdate=(id)=>{
        
        navigate("/myedit/" +id);
  
    }


    const ans=mydata.map((key)=>{
        
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                <a href="#" onClick={()=>{RecUpdate(key.id)}}>
                <img src={editimg} width="30px"/>
                </a>
                </td>

                 <td>
                  < a href="#" onClick={()=>{delRec(key.id)}}>
                  <img src={delimg} width="30px"/>
                  </a>
                </td>
                
            </tr>
            </>
        )
    });

    return(
        <>
        <h1>Update Employee Records</h1>
        <table align="center" width="700" bgcolor="yellow" border="1">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Update;