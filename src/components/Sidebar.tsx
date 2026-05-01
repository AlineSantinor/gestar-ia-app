import MenuItem from "./MenuItem";
import {
  FaHome,
  FaUserFriends,
  FaCalendarAlt,
  FaFileAlt,
  FaFlask,
  FaBell,
  FaComments,
  FaChartBar,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#2D1B69",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 15px",
      }}
    >
      {/* TOPO */}
      <div>
        <h2 style={{ marginBottom: "30px" }}>GestarIA</h2>

        <MenuItem icon={<FaHome />} label="Dashboard" active />
        <MenuItem icon={<FaUserFriends />} label="Gestantes" />
        <MenuItem icon={<FaCalendarAlt />} label="Agenda" />
        <MenuItem icon={<FaFileAlt />} label="Consultas" />
        <MenuItem icon={<FaFlask />} label="Exames" />
        <MenuItem icon={<FaBell />} label="Alertas" />
        <MenuItem icon={<FaComments />} label="Mensagens" />
        <MenuItem icon={<FaChartBar />} label="Relatórios" />
      </div>

      {/* RODAPÉ */}
      <div>
        <MenuItem icon={<FaQuestionCircle />} label="Ajuda" />
        <MenuItem icon={<FaSignOutAlt />} label="Sair" />
      </div>
    </div>
  );
}

export default Sidebar;