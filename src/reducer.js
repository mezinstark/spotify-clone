export const initialState ={
    user: null,
    playlist: [],
    playing: false,
    item: null,
token:null,
};

const reducer = (state, action) =>{
 console.log(action);

 switch(action.type){ //for debugging purposes. It listens to the action and does the relevant job [payload]
     case 'SET_USER': 
        return{
            ...state,
            user: action.user
        }

    case 'SET-TOKEN':
        return{
            ...state,
            token: action.token
        }
        default: return state;
 }
}

export default reducer;