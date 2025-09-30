export default function Flex({ children }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          margin: "auto",
          marginBottom: "100px",
          flexWrap: "wrap",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        {children}
      </div>
    </>
  );
}
