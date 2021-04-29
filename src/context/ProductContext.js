<<<<<<< HEAD
import axios from "axios";
import React, { useReducer } from "react";

export const topicContext = React.createContext();

const INIT_STATE = {
  topicsData: [],
  topicDetails: null,
  searchData: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TOPICS":
      return { ...state, topicsData: action.payload };
    case "GET_TOPIC_DETAILS":
      return { ...state, topicDetails: action.payload };
    case "SEARCH":
      return { ...state, searchData: action.payload };
    default:
      return state;
  }
};

const TopicContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function postNewTopic(topic) {
    axios.post("http://localhost:8000/topics", topic);
  }
  async function getTopics() {
    let { data } = await axios.get("http://localhost:8000/topics");
    dispatch({
      type: "GET_TOPICS",
      payload: data,
    });
  }
  async function getTopicDetails(id) {
    let { data } = await axios.get(`http://localhost:8000/topics/${id}`);
    dispatch({
      type: "GET_TOPIC_DETAILS",
      payload: data,
    });
  }

  async function saveTopic(id, newTopic) {
    await axios.patch(`http://localhost:8000/topics/${id}`, newTopic);
    getTopicDetails(id);
  }
  async function search(value) {
    let { data } = await axios.get(`http://localhost:8000/topics?q=${value}`);
    dispatch({
      type: "SEARCH",
      payload: data,
    });
  }
  async function deleteTopic(id) {
    return await axios.delete(`http://localhost:8000/topics/${id}`);
  }
  return (
    <topicContext.Provider
      value={{
        topicsData: state.topicsData,
        topicDetails: state.topicDetails,
        searchData: state.searchData,
        postNewTopic,
        getTopics,
        getTopicDetails,
        saveTopic,
        search,
        deleteTopic,
      }}
    >
      {children}
    </topicContext.Provider>
  );
};
export default TopicContextProvider;
=======
import React, { useReducer } from 'react';

export const topicContext = React.createContext();
const INIT_STATE = { 
    theme:false
}

const reducer = (state=INIT_STATE, action) =>{
    switch(action.type){
        default: return state
    }
}
const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    
    return (
        <topicContext.Provider value={{}}>
            {children}
        </topicContext.Provider>
    )
}
export default TopicContextProvider;
>>>>>>> a0240f3cf3db0ec4c65dc73ef07ad5be4b77dcf3
