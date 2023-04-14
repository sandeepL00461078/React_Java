
import {useState} from 'react';

function LoginPage(){

    const [username,setUsername]=useState('state name');
    const [password,setPassword]=useState('state pwd');
    const [err,setErr]=useState('');
    const [msg,setMsg]=useState('');

    const handleUsername =(event)=>{
        let temp = event.target.value
        setUsername(temp)
        console.log(username)
        console.log(temp.includes(''))
        if(temp ==='abc' || temp.includes(''))
            setErr('invalid word')
        else{
            setErr('');
        }
    }

    const handlePassword =(event)=>{
        setUsername(event.target.value)
        console.log(password)
        if(password.length<8){
            setErr('password too short');
        }
        else{
            setErr('');
        }
    }

    const handleMsg=(event)=>{
        setMsg('loged in as '+username)
    }
    let form=( <form>
        <div>
            <label>Username:</label>
            <input type="text" onChange ={handleUsername} value={username}></input>
        </div>
        <div>
            <label>Password :</label>
            <input type="password" onChange ={handlePassword} value={password}></input>
        </div>

        <span>{err}</span>

        <button type='button' onClick={handleMsg} disabled={err!=''}>Login</button>
    <span>{msg}</span>
    </form>
    );
    return form
}

export default LoginPage


//created a form in react
//we created staet to modify the form
//we used onchange, handle to validate the form
//populate the error messages
//disable 