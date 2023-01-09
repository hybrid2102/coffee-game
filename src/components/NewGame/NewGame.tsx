import { useRef } from "react";

export const NewGame = (props: { callback: (secret: number) => void }) => {
  const { callback } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //let secret = e.target.querySelector("#secretNumber").value;
    if (inputRef.current) {
      let secret = +inputRef.current.value;
      callback(secret);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="secretNumber">Inserisci il numero:</label>
      <input id="secretNumber" type="text" ref={inputRef} />
      <input type="submit" />
    </form>
  );
};
