import React, { useReducer } from "react";
import QueryContext from "./QueryContext";
const initialState = {
  Term: localStorage.getItem("query"),
};
const handelReducer = (state, action) => {
  if (action.type === "update") {
    localStorage.clear();
    localStorage.setItem("query", action.term);
    return {
      Term: action.term,
    };
  }
  return initialState;
};
function ContextProvider(props) {
  const [State, dispatch] = useReducer(handelReducer, initialState);
  function handelUpdate(term) {
    dispatch({
      type: "update",
      term: term,
    });
  }
  const UpdatedQueryContext = {
    Term: State.Term,
    UpdateTerm: handelUpdate,
  };
  return (
    <QueryContext.Provider value={UpdatedQueryContext}>
      {props.children}
    </QueryContext.Provider>
  );
}

export default ContextProvider;
