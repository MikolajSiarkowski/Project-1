import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from 'react';
import './styles.css'
import App from "../App";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from "@mui/material/Input";

enum PageState { 
    Success,
    Failure,
    Form
}

export function Registration() {
    const mail = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [currentState, setCurrentState] = useState<PageState>(PageState.Form);

    {if(currentState === PageState.Form){
            return (
            <div className='main'>
                <FormControl sx={{
                    paddingBottom: "10px",
                    color: "whitesmoke"
                    }}>
                    <InputLabel 
                    htmlFor="mail-input" 
                    sx={{
                        color: "whitesmoke",
                    }}>Email address</InputLabel>
                    <Input required type="email"inputRef={mail} id="mail-input" />
                </FormControl>
                <FormControl sx={{paddingBottom: "10px"}}>
                    <InputLabel 
                    htmlFor="password-input"
                    sx={{
                        color: "whitesmoke",
                    }}>Password</InputLabel>
                    <Input required type="password" inputRef={password} id="password-input" />
                </FormControl>
                <Button 
                    onClick={(e) => {
                        const auth = getAuth();
                        createUserWithEmailAndPassword(auth, mail.current?.value!, password.current?.value!)
                          .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user);
                            setCurrentState(PageState.Success);
                            // ...
                          })
                          .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode,errorMessage);
                            setCurrentState(PageState.Failure);
                            // ..
                          });
                        e.preventDefault();}}
                    sx={{
                        width: "10%",
                        textAlign: "center",
                        border: "solid 2px",
                        color: "whitesmoke",
                    }}>
                        Submit
                </Button>
        </div>)
        } else if(currentState === PageState.Success){
            return (
                <App></App>
            )
        } else{
            return(
                <div>O nie, cos poszlo nie tak!</div>
            )
        }
    }
}