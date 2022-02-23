//constructing and routing the end-point for the user to log in.
//the endpoint will send user to the spotify authorization page and they will check your credential and authenticate it.
// basically, we are handing out the login backend job to spotify and they will send us the login signals

export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirecting user back to the our app(home page)

const redirectUri ="http://localhost:3000/";
const clientId= "ac800e0dfab24633b35941ed0cfa7efd";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//this code snippet is to extract meaningful messages from the recieved token
//
export const getTokenFromUrl=()=>{
    return window.location.hash
     .substring(1)
     .split('&')
     .reduce((initial, item) =>{
         var parts = item.split('=')
         initial[parts[0]] = decodeURIComponent(parts[1]);
         
         return initial;

     }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
