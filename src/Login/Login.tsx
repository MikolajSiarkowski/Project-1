import { getAuth, signInWithEmailAndPassword, signInWithRedirect, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
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

export function Login() {
    const mail = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [currentState] = useState<PageState>(PageState.Form);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    getRedirectResult(auth)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result?.user;
        console.log(credential,user,token);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential,errorCode,errorMessage);

        // ...
        });

    {if(currentState === PageState.Form){
        return (
        <div className='main'>
            <FormControl sx={{paddingBottom: "10px"}}>
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
                    signInWithEmailAndPassword(auth, mail.current?.value!, password.current?.value!)
                        .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        // ...
                        })
                        .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode,errorMessage);
                        // ..
                        });
                        e.preventDefault();
                        }}
                sx={{
                    width: "15%",
                    textAlign: "center",
                    border: "solid 2px",
                    color: "whitesmoke",
                    marginBottom: "0.5rem",
                }}>
                    Log in
            </Button>
            <Button 
                onClick={() => {
                    const auth = getAuth();
                    signInWithPopup(auth, provider)
                        .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        // const token = credential?.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        console.log(credential,user);
                        // IdP data available using getAdditionalUserInfo(result)
                        // ...
                        }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        // const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        console.log(credential,errorCode,errorMessage);
                        // ...
                        });                        
                }}
                sx={{
                    width: "15%",
                    textAlign: "center",
                    border: "solid 2px",
                    color: "whitesmoke",
                    marginBottom: "0.5rem",
                }}>
                    Log in with GooglePopUp
            </Button>
            <Button 
                onClick={() => {
                    const auth = getAuth();
                    signInWithRedirect(auth, provider);                      
                }}
                sx={{
                    width: "15%",
                    textAlign: "center",
                    border: "solid 2px",
                    color: "whitesmoke",
                }}>
                    Log in with GoogleRedirect
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