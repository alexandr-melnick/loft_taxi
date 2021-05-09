import React, {Component, createContext, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (email, password) => {
    if (email !== "test@test.com" && password !== "123") {
      return
    }

    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false)
  };

  return (
      <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
        {children}
      </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
          <AuthContext.Consumer>
            {(value) => (<WrappedComponent {...value} {...this.props}/>)}
          </AuthContext.Consumer>
      )
    }
  }
}

