import React from "react";
import Nav from "../navbar/nav";
import Cards from "../cards/cards";
import Filter from "../filter/Filter";
import "./home.css";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <div className="container-home">
      <div className="navigation-home">
        <Nav />
      </div>
      <div className="filter-home">
        <Filter />
      </div>
      <div className="body-home">
        <Cards />
      </div>
      <div className="body-footer">
        <Footer/>{/*  */}
      </div>
    </div>
  );
}
