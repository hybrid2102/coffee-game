export const Page = (props: { children?: JSX.Element | JSX.Element[] }) => {
  const { children } = props;
  return <div className="d-flex justify-content-center">{children}</div>;
};
