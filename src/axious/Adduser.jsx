import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adduser = () => {
    let [value, setvalue] = useState({ name: "", email: "" })
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
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={value.name} onChange={change} />
                <br />
                <br />
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" value={value.email} onChange={change} />
                <br />
                <br />
                <button onClick={send}>adduser</button>
            </form>
        </div>
    )
}
export default Adduser