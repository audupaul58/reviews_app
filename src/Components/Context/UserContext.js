import { createContext, useState } from "react";
import axios from 'axios';
import {useRouter} from 'next/router';
import { sassNull } from "sass";

const UserAuthenticationContext = createContext()

const AuthenticationProviver =({children})=>{

    const [user, setUser] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter()

    const login = ({username, password})=>{
        console.log("Create Context")
        console.log({username, password})

    }

    return(
        <UserAuthenticationContext.Provider value={{user, accessToken, error, login}}>
            {children}
        </UserAuthenticationContext.Provider>
    )



}

export default UserAuthenticationContext