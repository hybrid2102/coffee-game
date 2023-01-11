import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../App";

export const Help = () => {
  const { defaultMin: min, defaultMax: max } = useContext(GameContext);
  return (
    <div className="">
      <h1 className="display-6 fw-bold text-center">Scopo del gioco</h1>
      <div className="col-lg-7 mx-auto text-center">
        <p className="lead mb-4">
          Cercare di NON indovinare, per tutta la durata del gioco, il numero
          segreto scelto dal banco ad inizio partita.
        </p>
      </div>
      <h1 className="display-6 fw-bold text-center">Svolgimento</h1>
      <div className="col-lg-7 mx-auto">
        <ul className="text-left">
          <li>
            il banco sceglie un numero segreto da {min} a {max} (es: "890")
          </li>
          <li>
            il primo giocatore scommette con un numero da {min} a {max} (es:
            "300")
          </li>
          <li>
            il banco controlla il numero segreto:
            <ul>
              <li>
                se il giocatore ha indovinato, questi ha perso ed il gioco
                termina
              </li>
              <li>
                altrimenti il banco rivela se il numero scommesso è minore o
                maggiore del numero segreto (es: "il numero segreto è maggiore
                di 300")
              </li>
            </ul>
          </li>
          <li>
            il banco aggiorna il limite minimo e massimo (es: "da 300 a 1000")
          </li>
          <li>
            adesso è il turno del secondo giocatore, che dovrò scommettere con
            un nuovo numero, all'interno dell'intervallo appena aggiornato
          </li>
          <li>
            il gioco termina quando un giocatore indovina il numero segreto,
            perdendo la partita... dovrà quindi offrire il caffè a tutti!
          </li>
        </ul>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/" className="btn btn-primary btn-lg px-4 gap-3">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};
