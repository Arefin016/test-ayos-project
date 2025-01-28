const Container = ({ children, width = "100%" }) => {
  return (
    <div
      className={`mx-auto`}
      style={{
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
