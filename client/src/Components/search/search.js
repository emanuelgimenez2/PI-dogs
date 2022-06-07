import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogName } from "../../actions/index";

import "./search.css";

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) {
      return alert("Ingresa un valor para buscar");
    } else {
      dispatch(getDogName(name));
      setName("");
    }
  }

  return (
    <div className="container-search">
      <div>
        <input
          type="text"
          placeholder="Buscar..."
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={(e) => handleInputChange(e)}
          value={name}
          className="input-search"
        />
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="button-search"
        ></button>
      </div>
    </div>
  );
}
