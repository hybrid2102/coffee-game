export const PageLayout = (props: {
  children?: JSX.Element | JSX.Element[];
}) => {
  const { children } = props;
  return (
    <div className="container px-4 text-center">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">{children}</div>
      </div>
    </div>
  );
};
