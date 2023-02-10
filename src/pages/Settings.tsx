import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export const Settings = () => {
  const {
    initialRange: { min, max },
  } = useAppSelector((state) => state.settings.value);

  return (
    <div>
      <h1 className="display-6 fw-bold">Settings</h1>
      <p className="lead mb-4">TODO</p>
    </div>
  );
};
