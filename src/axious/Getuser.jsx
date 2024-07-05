import axios from "axios";
import React, {useState, } from "react";
import { useNavigate,Link } from "react-router-dom";
const Getuser=()=>{
    let[data,setdata]=useState([])
    function demo(){
        axios.get("http://localhost:8080/users").then(res=>{
            console.log(res);
            setdata(res.data)
        })

    }
    demo()
    const navigate=useNavigate()
    function add(){
        navigate("/add")
    }
    
    function del(id) {
        axios.delete("http://localhost:8080/users/" +id).then(res =>{

        })
        navigate("/add")

    }
    

    return(
       <div>
        <strong>React crud</strong>
        &nbsp;&nbsp;
        <br />
        <br />
        {/* <button onClick={add}>Add</button> */}
        <table border="2px" rules="all">
            <tbody>
                {data.map(a=>{
                   return(
                    <tr key={a.id}>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>
                            <Link to={`/update/${a.id}`}><button>edit</button></Link>
                            
                            <button onClick={()=>{
                                del(a.id);
                            }}>delete</button>
                        </td>
                    </tr>
                   )
                })}
            </tbody>
        </table>
        <br />
        <button id='add' onClick={add}>Add+</button>
       </div>
    )
}
export default Getuser;