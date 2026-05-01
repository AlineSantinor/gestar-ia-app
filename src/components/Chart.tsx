import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { mes: "Jan", alto: 10, medio: 20, baixo: 30 },
  { mes: "Fev", alto: 15, medio: 25, baixo: 35 },
  { mes: "Mar", alto: 12, medio: 22, baixo: 32 },
  { mes: "Abr", alto: 18, medio: 28, baixo: 40 },
  { mes: "Mai", alto: 20, medio: 30, baixo: 45 },
  { mes: "Jun", alto: 25, medio: 35, baixo: 50 },
];

function Chart() {
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          {/* 🔲 Linhas de fundo suaves */}
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />

          <XAxis dataKey="mes" />
          <YAxis />

          {/* 💬 Tooltip estilizado */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          />

          <Legend />

          {/* 🔴 Alto risco */}
          <Line
            type="monotone"
            dataKey="alto"
            stroke="#ff4d4f"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          {/* 🟡 Médio risco */}
          <Line
            type="monotone"
            dataKey="medio"
            stroke="#faad14"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

          {/* 🟢 Baixo risco */}
          <Line
            type="monotone"
            dataKey="baixo"
            stroke="#52c41a"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;