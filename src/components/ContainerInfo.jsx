import React from "react";
import Button from "./Button";
import "./styles/ContainerInfo.css"

const ContainerInfo = ({phrase, handleNewInfo}) => {

  return (
      <section className="containerInfo">
        <h1 className="containerInfo__title">galletas de la fortuna</h1>

        <Button handleNewInfo = {handleNewInfo}/>

        <article className="containerInfo__phrase">
          <p>{phrase.phrase}</p>
        </article>
        <article className="containerInfo__author">
          <h4>Author : {phrase.author}</h4>
        </article>
      </section>
  );
};

export default ContainerInfo;
