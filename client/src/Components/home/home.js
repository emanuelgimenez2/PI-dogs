import React from "react";
import Nav from "../navbar/nav";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions/index.js";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rootReducer);
  React.useEffect(() => {
    dispatch(getDogs());
    console.log(state,"===========================");
  }, []);

  return (
    <div className="container-home">
      <div className="navigation-home">
        <Nav />
      </div>
      <div className="body-home">
        {/* <Pagination/> */}
        <Cards />
      </div>
    </div>
  );
}
