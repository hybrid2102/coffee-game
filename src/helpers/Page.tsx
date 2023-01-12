export const Page = (props: { children?: JSX.Element | JSX.Element[] }) => {
  const { children } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </div>
  );
};
