interface ViewProps {
  children?: React.ReactNode;
  [prop: string]: unknown;
}

const View = ({ children, ...rest }: ViewProps) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default View;
