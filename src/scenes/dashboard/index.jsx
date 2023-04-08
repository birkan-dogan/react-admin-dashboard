import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  EmailOutlined,
  PersonAdd,
  PointOfSale,
  TrafficOutlined,
} from "@mui/icons-material";
import StatBox from "../../components/StatBox";
import Row2 from "../../components/Row2";
import Row3 from "../../components/Row3";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} /> Download Reports
        </Button>
      </Box>

      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "24px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="432,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+18%"
            icon={
              <PointOfSale
                sx={{ color: colors.greenAccent[600], fontSize: "24px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,325"
            subtitle="New Clients"
            progress="0.30"
            increase="+4%"
            icon={
              <PersonAdd
                sx={{ color: colors.greenAccent[600], fontSize: "24px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,123"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "24px" }}
              />
            }
          />
        </Box>

        {/* row 2 */}
        <Row2 />
        <Row3 />
      </Box>
    </Box>
  );
};

export default Dashboard;
