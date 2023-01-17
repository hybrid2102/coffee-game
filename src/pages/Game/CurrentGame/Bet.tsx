import { Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  betInput: number;
}

export const Bet = (props: {
  minBet: number;
  maxBet: number;
  callback: (x: number) => void;
}) => {
  const { minBet, maxBet, callback } = props;

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
      value: Number(minBet) + 1,
      message: `inserire un numero maggiore di ${minBet}`,
    },
    max: {
      value: Number(maxBet) - 1,
      message: `inserire un numero minore di ${maxBet}`,
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
