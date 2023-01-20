export const PageLayout = (props: {
  children?: JSX.Element | JSX.Element[];
}) => {
  const { children } = props;
  return (
    <div className="container px-4">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">{children}</div>
      </div>
    </div>
  );
};
