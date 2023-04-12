import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "../../components/rows/Row1";
import Row2 from "../../components/rows/Row2";
import Row3 from "../../components/rows/Row3";
import { useEffect, useState } from "react";
import RedoIcon from "@mui/icons-material/Redo";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [tilt, setTilt] = useState(false);

  let w = window.innerWidth;

  useEffect(() => {
    if (w < 480) {
      setTilt(true);
      setTimeout(() => {
        setTilt(false);
      }, 4000);
    }
  }, []);

  return (
    <Box>
      {tilt && (
        <div className="overlay">
          <div className="phone">
            <RedoIcon className="tilt-phone" />
          </div>
          <h1>Tilt the Phone to get better experience</h1>
        </div>
      )}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        ml="17px"
        mr="28px"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box className="dashboard-button">
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
      </Box>

      {/* Grid */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        flexWrap="wrap"
      >
        <Row1 />
        <Row2 />
        <Row3 />
      </Box>
    </Box>
  );
};

export default Dashboard;
