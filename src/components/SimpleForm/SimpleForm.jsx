import { useState } from "react";
const SimpleForm = () => {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value) 
        console.log(name,email, password) 
    }

    const handleNameChange= e =>{
        setName(e.target.value)
    }

    const handleEmailChange= e =>{
        setEmail(e.target.value)
    }

    const handlePasswordChange= e =>{
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input onChange={handleNameChange} type="text" name="name" />
                <br/>

                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br/>

                <input onChange={handlePasswordChange} type="password" name="" id="" />
                <br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;