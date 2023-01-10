import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="alert alert-warning" role="alert">
      Ops... La pagina richiesta non esiste! Torna alla <Link to="/">Home</Link>
      .
    </div>
  );
};
