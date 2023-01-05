export const CurrentGame = (props: {
  secretNumber: number;
  callback: (e: any) => void;
}) => {
  const { callback } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let secret = e.target.querySelector("#bet").value;
    callback(secret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Numero segreto</legend>
        <input
          id="secretNumber"
          readOnly
          value={props?.secretNumber}
          type="text"
        />
      </fieldset>

      <label htmlFor="bet">Prova a indovinare:</label>
      <input id="bet" type="text" />
      <input type="submit" />
    </form>
  );
};
