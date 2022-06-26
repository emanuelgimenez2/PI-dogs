/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Nav from "../navbar/nav";
import Cards from "../cards/cards";
import Filter from "../filter/filter";
import "./home.css";
import { useDispatch } from "react-redux";
import { getDogs } from "../../actions";
import Footer from "../footer/footer";

export default function Home() {
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);
  
  return (
    <div className="container-home">
      <div className="navigation-home">
        <Nav />
      </div>
      <div className="body-home">
        <Filter />
      </div>
      <div className="body-home">
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
