import React from "react";
import Nav from "../navbar/nav";
import Cards from "../cards/cards";

export default function Home() {
  return (
    <div className="container-home">
      <div className="navigation-home">
        <Nav />
      </div>
      <div className="body-home">
        <Cards />
      </div>
    </div>
  );
}
