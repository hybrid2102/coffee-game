import { useState } from "react";
import { Button } from "react-bootstrap";
import { ModeSelector } from "./ModeSelector";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

export interface IFormInputs {
  secretInput: number;
}

export const NewGame = (props: {
  startGameCallback: (secret: number) => void;
}) => {
  const { startGameCallback } = props;

  const formCtx = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    startGameCallback(data.secretInput);
  };

  return (
    <form onSubmit={formCtx.handleSubmit(onSubmit)}>
      <ModeSelector formContext={formCtx} />
      <Button type="submit">Inizia la partita</Button>
    </form>
  );
};
