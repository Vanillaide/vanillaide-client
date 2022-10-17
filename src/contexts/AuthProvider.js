import PropTypes from "prop-types";
import { useState, createContext } from "react";

export const UserContext = createContext(null);

function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <UserContext.Provider value={{ user: loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element,
};
