import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import actions from "./api";

function Suggestions(props) {
  let [post, setPost] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await actions.suggestions({ post });
    history.push("/"); //props.history.push is also an option
  };

  return (
    <div>
      <h1>Suggestions</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Enter a post" />
        <button>TORO</button>
      </form>
    </div>
  );
}
export default Suggestions;
