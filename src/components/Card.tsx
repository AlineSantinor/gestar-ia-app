type CardProps = {
  title: string;
  value: number;
  color: string;
};

function Card({ title, value, color }: CardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h4 style={{ color }}>{title}</h4>
      <h2 style={{ margin: "10px 0" }}>{value}</h2>
      <p style={{ color: "#888" }}>Gestantes</p>
    </div>
  );
}

export default Card;