import * as SecureStore from "expo-secure-store";
import PropTypes from "prop-types";
import React, { useState, useEffect, createContext } from "react";

import api from "../api/api";

export const UserContext = createContext(null);

function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = await SecureStore.getItemAsync("token");

        if (!token) {
          setIsChecked(true);
          setLoggedInUser(null);

          return;
        }

        if (!isChecked) {
          const { user } = await api.postAuthCheck(token);

          setLoggedInUser(user);
          setIsChecked(true);
        }
      } catch (err) {
        console.log(err);
        setLoggedInUser(null);
        setIsChecked(true);
      }
    }

    fetchUser();
  }, [loggedInUser]);

  return (
    <>
      {isChecked && (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          {children}
        </UserContext.Provider>
      )}
    </>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element,
};
