import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Updateuser = () => {
    let{id}=useParams()
    let [value, setvalue] = useState({ name: "", email: "" })
    useEffect(()=>{
        axios.get("http://localhost:8080/users",+id).then(res=>{
            setvalue(res.data)
        })
    },[])
    let change = (e) => {
        setvalue({ ...value, [e.target.name]: [e.target.value] })
    }
    const navigate=useNavigate()
    function send(e){
        e.preventDefault()
        axios.post("http://localhost:8080/users",value).then(res=>{
            navigate("/")
        })
    }
    return (
        <div>
            <h1>Update User</h1>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={value.name} onChange={change} />
                <br />
                <br />
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" value={value.email} onChange={change} />
                <br />
                <br />
                <button onClick={send}>update user</button>
            </form>
        </div>
    )
}
export default Updateuser