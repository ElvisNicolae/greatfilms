import "./Login.scss";
import { useForm } from "react-hook-form";
import themoviedb from "../../../api/themoviedb";
import { useState } from 'react';
import { useHistory } from "react-router";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [error, setErorr] = useState(false);
    const history = useHistory();

    const onSubmit = async ({username, password}) => {
        try{
            const {data} = await themoviedb.get("/authentication/token/new");   
            const loginresponse = await themoviedb.post("/authentication/token/validate_with_login", {
                username,
                password,
                request_token: data.request_token
            })
            const sessionresponse = await themoviedb.post("/authentication/session/new", {
                request_token: loginresponse.data.request_token
            })

            document.cookie = `sessionId=${sessionresponse.data.session_id}; expires=Thu, 30 Dec 2021 12:00:00 UTC; path=/`;           
            setTimeout(()=>{
                history.push('/');
                window.location.reload();
            },370)

            setErorr(false);
        }
        catch (err) {
            setErorr(true);
        }
    }

    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                {error ? <h2 className="login__error">Incorrect username or password.</h2> : null}
                <label className="login__username">
                    Username
                    <input type="text" {...register("username", {required: "username required"})}/>
                </label>
                <label>
                    Password
                    <input type="password" {...register("password", {required: "password required"})}/>
                </label>
                <button type="submit" className="login__submit-button">Login</button>
            </form>
        </div>
    )
}

export default Login;