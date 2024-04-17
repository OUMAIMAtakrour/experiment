import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, setUserToken] = useState(
        localStorage.getItem("userToken")
    );
    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
