const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'false',
    id: "",
    user: "",
    
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            
            return {
                ...state,
                isAuthenticated: true,
                id: action.payload.id,
                user: action.payload.user,
                
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuthenticated: false,
                id: "",
                user: "",
            }
        

        default:
            return state
    }
}

export default authReducer