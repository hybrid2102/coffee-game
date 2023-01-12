export const Page = (props: { children?: JSX.Element | JSX.Element[] }) => {
  const { children } = props;
  return <div className="container px-4 text-center">{children}</div>;
};
