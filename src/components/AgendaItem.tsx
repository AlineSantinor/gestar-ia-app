type AgendaItemProps = {
  hora: string;
  nome: string;
  tipo: string;
};

function AgendaItem({ hora, nome, tipo }: AgendaItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div>
        <strong>{hora}</strong>
        <p style={{ margin: "2px 0", color: "#555" }}>{nome}</p>
      </div>

      <span
        style={{
          background: "#2D1B69",
          color: "white",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px",
        }}
      >
        {tipo}
      </span>
    </div>
  );
}

export default AgendaItem;