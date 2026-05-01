import Header from "../components/Header";
import Card from "../components/Card";
import AgendaItem from "../components/AgendaItem";
import Chart from "../components/Chart";

function Dashboard() {
  
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        background: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* 🔴 CARDS */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Card title="Alto risco" value={12} color="#ff4d4f" />
        <Card title="Risco médio" value={25} color="#faad14" />
        <Card title="Baixo risco" value={63} color="#52c41a" />
      </div>

      {/* 📊 CONTEÚDO PRINCIPAL */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        {/* ESQUERDA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
  
  {/* 🔔 ALERTAS */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3 style={{ marginBottom: "15px" }}>
      🔔 Alertas recentes
    </h3>

    {/* seus AlertItem aqui */}
  </div>

  {/* 📅 AGENDA */}
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <h3 style={{ marginBottom: "15px" }}>
      📅 Agenda do dia
    </h3>

    <AgendaItem
      hora="08:00"
      nome="Maria Silva"
      tipo="Consulta"
    />

    <AgendaItem
      hora="09:30"
      nome="Ana Souza"
      tipo="Retorno"
    />

    <AgendaItem
      hora="11:00"
      nome="Juliana Lima"
      tipo="Exame"
    />

    <AgendaItem
      hora="14:00"
      nome="Carla Mendes"
      tipo="Consulta"
    />
  </div>

</div>

{/* DIREITA */}
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "15px" }}>
            📊 Evolução de Gestantes
          </h3>

          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;