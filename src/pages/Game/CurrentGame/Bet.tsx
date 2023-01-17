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
      <div>
        <input
          type="number"
          className="form-control my-3"
          placeholder="Prova a NON indovinare..."
          {...register("betInput", betInputOptions)}
        />
        {errors.betInput && (
          <p className="alert alert-danger mt-4">{errors.betInput.message}</p>
        )}
      </div>
      <div className="mt-3">
        <Button type="submit">Scommetti</Button>
      </div>
    </form>
  );
};
