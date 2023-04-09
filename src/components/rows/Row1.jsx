import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../StatBox";
import { mockStateBox as stateBox } from "../../data/mockData";
import {
  EmailOutlined,
  PersonAdd,
  PointOfSale,
  TrafficOutlined,
} from "@mui/icons-material";

const Row1 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const icons = [
    <EmailOutlined sx={{ color: colors.greenAccent[600], fontSize: "24px" }} />,
    <PointOfSale sx={{ color: colors.greenAccent[600], fontSize: "24px" }} />,
    <PersonAdd sx={{ color: colors.greenAccent[600], fontSize: "24px" }} />,
    <TrafficOutlined
      sx={{ color: colors.greenAccent[600], fontSize: "24px" }}
    />,
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="18px"
      width="95%"
      flexWrap="wrap"
    >
      {stateBox.map((state) => (
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          key={state.id}
          className="flex-box"
        >
          <StatBox
            title={state.title}
            subtitle={state.subtitle}
            progress={state.progress}
            increase={state.increase}
            icon={icons[state.id - 1]}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Row1;
