import React from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps {
    authService: AuthService
}

interface LoginState{
    userName: string,
    password:string,
    loginAttenpted: boolean,
    loginSuccesfull: boolean
}

export class Login extends React.Component<LoginProps,LoginState> {
    state: LoginState ={
        userName:'',
        password:'',
        loginAttenpted:false,
        loginSuccesfull:false

    }
    render(){
        return(
            <div>
                <form>
                     <input value={this.state.userName} />
                     <input value={this.state.password} type="password" />
                     <input type="submit" value='Login'/>
                </form>
            </div>
        )
    }
}