import { useState } from "react";
const SimpleForm = () => {

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password must be 6 character or longer')
        }else{
            setError('')
        }
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
        if(password.length<6)
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

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default SimpleForm;