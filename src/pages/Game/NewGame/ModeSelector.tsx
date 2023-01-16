export const ModeSelector = (props: {
  manualModeCallback: (manualMode: boolean) => void;
}) => {
  const { manualModeCallback } = props;
  return (
    <div className="form-check form-switch form-check-reverse">
      <input
        className="form-check-input"
        type="checkbox"
        id="flexSwitchCheckReverse"
        onChange={(e) => manualModeCallback(e.currentTarget.checked)}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
        Modalità manuale
      </label>
    </div>
  );
};
