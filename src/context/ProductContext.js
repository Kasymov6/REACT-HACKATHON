import React, { useReducer } from "react";

export const topicContext = React.createContext();
const INIT_STATE = {
    theme: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return <topicContext.Provider value={{}}>{children}</topicContext.Provider>;
};
export default TopicContextProvider;
