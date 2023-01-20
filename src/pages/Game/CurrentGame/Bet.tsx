import { Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { GameRange } from "../../../interfaces/GameRange";

interface IFormInputs {
  betInput: number;
}

export const Bet = (props: {
  range: GameRange;
  callback: (x: number) => void;
}) => {
  const { range, callback } = props;

  // react-hook-form
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onSubmit", criteriaMode: "all" });
  const betInputOptions = {
    required: { value: true, message: "inserire un numero valido" },
    min: {
      value: Number(range.min) + 1,
      message: `inserire un numero maggiore di ${range.min}`,
    },
    max: {
      value: Number(range.max) - 1,
      message: `inserire un numero minore di ${range.max}`,
    },
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    resetField("betInput");
    callback(data.betInput);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-8">
          <input
            type="number"
            className="form-control"
            placeholder="Prova a NON indovinare..."
            autoFocus
            {...register("betInput", betInputOptions)}
          />
        </div>
        <div className="col-4 d-grid">
          <Button type="submit">Scommetti</Button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {errors.betInput && (
            <p className="alert alert-danger mt-3">{errors.betInput.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};
