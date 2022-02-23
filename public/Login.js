import React from "react";
import './Login.css';
import { loginUrl } from "./spotify";

function Login(){
    return(
        <div class="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt=""/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login