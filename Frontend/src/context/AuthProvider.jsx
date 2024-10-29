import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(); //? ==================== "context" create kr rhe hai. thik na ====================
export const AuthProvider = ({ children }) => {
  //! ================================================================================
  //* ==================== Jo left define kiye hai ya right me define kiye hai screen ke vo saara "children" "COMPONENTS" hai. ====================
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("DigiSamvaad");

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  //! ================================================================================
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
