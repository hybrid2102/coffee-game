import { Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  betInput: number;
}

export const Bet = (props: {
  min: number;
  max: number;
  callback: (x: number) => void;
}) => {
  const { min, max, callback } = props;

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ mode: "onChange", criteriaMode: "all" });
  const betInputOptions = {
    required: { value: true, message: "inserire un numero valido" },
    min: {
      value: min + 1,
      message: `inserire un numero maggiore di ${min}`,
    },
    max: {
      value: max - 1,
      message: `inserire un numero minore di ${max}`,
    },
  };
  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    callback(data.betInput);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="row justify-content-md-center"
    >
      <div className="col col-sm-4">
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
      <div className="text-center mt-3">
        <Button type="submit">Scommetti</Button>
      </div>
    </form>
  );
};
