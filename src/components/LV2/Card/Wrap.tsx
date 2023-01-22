type ChildrenType = {
  children: React.ReactNode;
};

const Wrap = ({ children }: ChildrenType) => {
  return <div className="shadow-sm rounded-md p-5">{children}</div>;
};

export default Wrap;
