import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'; //after installing spotify api wrapper by npm i spotify-web-api-js
import Player from "./Player";
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi(); // creating a variable at the top for all major communication
function App() {

  //const [token, setToken] = useState(null); //this stores the value in the state variable. it is basically like short-term mem which 
                                          // gets deleted once refereshed.--> we can use and attach data into the dataLayer right below..

  const [{ user, token}, dispatch] = useDataLayerValue(); //we dispatch the collected data into datalayer with this
  // useEffect runs the code based on the given condition..most of the time a function
  useEffect( () => {
    const hash = getTokenFromUrl(); //gets token from the getTokenFromUrl function
    window.location.hash = ""; //we clear the token stored as hash in the server that we recieved from the url for security.

    const _token = hash.access_token; //to convert the hash format of the token

    if(_token){    
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(_token); // this gives access to the spotify 

      spotify.getMe().then((user) =>{
        console.log("user", user);

        dispatch({  // this put the user data into datalayer that can be directly used as in datalayer
          type: 'SET_USER',
          user: user,
        }) 
      });
    }

  } ,[]); 

  //[] denotes that it is going to run once when app() loads or we can add parameters like name-> [name] and then 
  // it will run everytime the name changes...it reacts based on the change of the 'name'


  return (
    <div className="App">
      {
//this is to check if there is a token recieved from the url. 
        token ? (
          <Player spotify= {spotify} />
        ): (
          <Login />
        )

      }
      </div>
  );
}

export default App;
