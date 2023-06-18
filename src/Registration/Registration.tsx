import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from 'react';
import './styles.css'
import App from "../App";

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
            <form className='box'>
                <label>
                    E-mail:
                    <input required type='email' ref={mail}></input>
                </label>
                <label>
                    Password:
                    <input required type='password' minLength={6} ref={password}></input>
                </label>
                <button type="submit" onClick={(e) => {
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
                    e.preventDefault();
                    }}>Submit</button>
            </form>
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