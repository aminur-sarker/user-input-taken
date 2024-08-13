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

        // we can gain input element by 2 types(use any one)
        // e.target.[input field name].value
        // or we can create handle event like 2nd console and need to use event 
        // another option that use in RefForm page. should follow the page for further

        console.log(e.target.name.value) 
        console.log(name,email, password) 
    }

    const handleNameChange= e =>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleEmailChange= e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePasswordChange= e =>{
        e.preventDefault()
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