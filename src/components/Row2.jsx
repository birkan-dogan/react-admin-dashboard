import { DownloadOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../data/mockData";
import LineChart from "./LineChart";
import { tokens } from "../theme";

const Row2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* left-side */}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Income Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="500"
              color={colors.greenAccent[100]}
            >
              $61,616,161
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadOutlined
                sx={{ fontSize: "24px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>

        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>

      {/* right side */}

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>

        {mockTransactions.map((transaction, index) => (
          <Box
            key={`${transaction.txId}-${index}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="15px"
            borderBottom={`4px solid ${colors.primary[500]}`}
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[500]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              {transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Row2;
