import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

const Item = ({ title, to, icon, selected, setSelected, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = function () {
    setSelected(title);
    setIsCollapsed(true);
  };
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={handleClick}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
