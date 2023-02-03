import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSettings } from "../redux/slices/settingsSlice";

export const Help = () => {
  const {
    defaultRange: { min, max },
  } = useSelector(selectSettings);

  return (
    <div>
      <h1 className="display-6 fw-bold">Scopo del gioco</h1>
      <p className="lead mb-4">
        Cercare di NON indovinare, per tutta la durata del gioco, il numero
        segreto scelto dal banco ad inizio partita.
      </p>
      <h1 className="display-6 fw-bold">Svolgimento</h1>
      <ul style={{ textAlign: "left" }}>
        <li>
          il banco sceglie un numero segreto da {min} a {max}, estremi esclusi{" "}
          <em>(es: &quot;890&quot; )</em>
        </li>
        <li>
          il primo giocatore scommette con un numero da {min} a {max}, estremi
          esclusi <em>(es: &quot;300&quot;)</em>
        </li>
        <li>
          il banco controlla il numero segreto:
          <ul>
            <li>
              se il giocatore ha indovinato, questi ha perso ed il gioco termina
            </li>
            <li>
              altrimenti il banco rivela se il numero scommesso è minore o
              maggiore del numero segreto
              <em> (es: &quot;il numero segreto è maggiore di 300&quot;)</em>
            </li>
          </ul>
        </li>
        <li>
          il banco aggiorna il limite minimo e massimo
          <em> (es: &quot;da 300 a 1000&quot;)</em>
        </li>
        <li>
          adesso è il turno del secondo giocatore, che dovrò scommettere con un
          nuovo numero, all&aposinterno dell&aposintervallo appena aggiornato
        </li>
        <li>
          il gioco termina quando un giocatore indovina il numero segreto,
          perdendo la partita... dovrà quindi offrire il caffè a tutti!
        </li>
      </ul>
      <div className="d-grid mt-5">
        <Link to="/" className="btn btn-primary btn-lg">
          Play
        </Link>
      </div>
    </div>
  );
};
