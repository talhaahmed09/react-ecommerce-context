import { createContext, useMemo, useReducer } from "react"
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage"
import appReducer, { initialState } from "./AppReducer";

const AuthContext = createContext({})

const AuthProvider = ({children}) => {
 
    const [state, dispatch] = useReducer(appReducer, initialState);
  const [isLoggedIn,setisLoggedIn] = useLocalStorage('isLoggedIn',null);
  const [user,setUser] = useLocalStorage('user',null);
  const navigate = useNavigate();

  const logIn = (user) => {
    let userData = null;
    dispatch({
      type: "SET_LOGIN",
    });

    if (userData) {
      return setTimeout(() => {
        dispatch({
          type: "SET_LOGIN_SUCCESS",
          payload: {
            user: userData,
          },
        });
        setisLoggedIn(true)
        setUser(userData)
        navigate('/dashboard')
      }, 5000);
    } else {
      return dispatch({
        type: "SET_LOGIN_ERROR",
      });
    }
  };

  const logOut = () => {
    setisLoggedIn(null);
    setUser(null);
     dispatch({
      type: 'LOG_OUT'
    });
    return navigate('/login')
  };

  const values = useMemo(() => ( {
    state:state,
    logIn,
    logOut,}), [state])
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider