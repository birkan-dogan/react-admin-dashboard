import { Box, Typography, useTheme } from "@mui/material";
import ProgressCircle from "../ProgressCircle";
import { tokens } from "../../theme";
import BarChart from "../BarChart";
import GeographyChart from "../GeographyChart";

const Row3 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box backgroundColor={colors.primary[400]} className="boxes-row3">
        <Typography variant="h5" fontWeight="600">
          Mobilization
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          <ProgressCircle size="125" />
          <Typography
            variant="h5"
            color={colors.greenAccent[500]}
            sx={{ mt: "15px" }}
          >
            $44,444 income generated
          </Typography>
          <Typography>Includes Extra Misc Expenditures and Costs</Typography>
        </Box>
      </Box>
      <Box backgroundColor={colors.primary[400]} className="boxes-row3">
        <Typography variant="h5" fontWeight="600">
          Sales Quantity
        </Typography>
        <Box height="250px" mt="-20px">
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      <Box backgroundColor={colors.primary[400]} className="boxes-row3">
        <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
          Geography Based Traffic
        </Typography>
        <Box height="200px">
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </>
  );
};

export default Row3;
