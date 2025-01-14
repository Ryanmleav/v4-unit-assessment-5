const initialState = {
 username: '', 
 profile_pic:''
};

const UPDATE_USER='UPDATE_USER'


export function updateUser(user){
  return{
    type: UPDATE_USER,
    payload: user
  }
}
 const LOGOUT = 'LOGOUT'
export function logout(){
  return{
    type: LOGOUT
  }
}

export default function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_USER:
      return {
        ...state,
        username: action.payload.username,
        profile_pic: action.payload.profile_pic
      }
      case LOGOUT :
        return initialState
        
   default: return state
  }
}