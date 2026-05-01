import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        background: "white",
        padding: "15px 20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* ESQUERDA */}
      <div>
        <h2 style={{ margin: 0 }}>Dashboard</h2>
        <span style={{ color: "#666" }}>
          UBS Jardim das Flores
        </span>
      </div>

      {/* DIREITA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* DATA */}
        <span style={{ color: "#666" }}>{dataAtual}</span>

        {/* NOTIFICAÇÃO */}
        <FaBell size={18} style={{ cursor: "pointer" }} />

        {/* USUÁRIO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaUserCircle size={22} />
          <span>Enf. Ana Paula</span>
        </div>
      </div>
    </div>
  );
}

export default Header;