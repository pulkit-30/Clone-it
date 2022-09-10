import React, { useContext, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import Classes from "./SearchBar.module.css";
import { useHistory } from "react-router-dom";
import QueryContext from "../../Context/QueryContext";

function SearchBar(props) {
  const Context = useContext(QueryContext);
  const History = useHistory();
  const [Query, setQuery] = useState(Context.Term);
  const handelSubmit = (event) => {
    event.preventDefault();
    Context.UpdateTerm(Query);
    History.push("/search");
    setQuery("");
  };
  const HandelChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <form onSubmit={handelSubmit}>
      <div className={Classes.Search_Box + " flex"}>
        <div>
          <SearchIcon />
        </div>
        <input type="search" value={Query} onChange={HandelChange} autoFocus />
        <div>
          <MicIcon />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
