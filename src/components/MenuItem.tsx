type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

function MenuItem({ icon, label, active }: MenuItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        background: active ? "#4B2E83" : "transparent",
        marginBottom: "5px",
      }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export default MenuItem;