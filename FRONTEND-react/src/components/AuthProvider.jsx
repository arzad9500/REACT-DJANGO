import {useState,useContext, createContext} from 'react'

const AuthContext = createContext() 

export const AuthProvider = ({children}) => {

     const [isLoggedin , setIsLoggedin] = useState(
        !!localStorage.getItem("accessToken")  // if it was in login , we store in tokens in local storage
     )  // we did not pass anything coz it based on user login or not

  return (
    <>
      {/* isLoggedin,setIsLoggedin this both is available in any component coz check app.jsx */}
      <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export {AuthContext}