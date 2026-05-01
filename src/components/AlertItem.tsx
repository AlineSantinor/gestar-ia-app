type AlertItemProps = {
  nome: string;
  semana: number;
  tipo: "alto" | "medio" | "baixo";
  mensagem: string;
};

function AlertItem({ nome, semana, tipo, mensagem }: AlertItemProps) {
  const getColor = () => {
    switch (tipo) {
      case "alto":
        return "#ff4d4f";
      case "medio":
        return "#faad14";
      case "baixo":
        return "#52c41a";
    }
  };

  const getLabel = () => {
    switch (tipo) {
      case "alto":
        return "ALTO RISCO";
      case "medio":
        return "RISCO MÉDIO";
      case "baixo":
        return "BAIXO RISCO";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px",
        marginBottom: "12px",
        background: "#fafafa",
        borderRadius: "10px",
        borderLeft: `5px solid ${getColor()}`,
      }}
    >
      <div>
        <strong>{nome}</strong>
        <p style={{ margin: "4px 0", color: "#555" }}>
          {mensagem}
        </p>
        <span style={{ fontSize: "12px", color: "#888" }}>
          {semana} semanas
        </span>
      </div>

      <span
        style={{
          background: getColor(),
          color: "white",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {getLabel()}
      </span>
    </div>
  );
}

export default AlertItem;