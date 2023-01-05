export const NewGame = (props: { callback: (secret: number) => void }) => {
  const { callback } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let secret = e.target.querySelector("#secretNumber").value;
    callback(secret);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="secretNumber">Inserisci il numero:</label>
      <input id="secretNumber" type="text" />
      <input type="submit" />
    </form>
  );
};
