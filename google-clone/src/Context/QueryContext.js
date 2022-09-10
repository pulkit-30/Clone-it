import React from "react";
const QueryContext = React.createContext({
  Term: "",
  UpdateTerm: (term) => {},
});
export default QueryContext;
