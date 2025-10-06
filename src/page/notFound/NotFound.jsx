import React from "react";
import { Box, Typography, useTheme, Paper, Button } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor={theme.palette.background.default}
      p={2}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color={theme.palette.error.main}
          gutterBottom
        >
          404
        </Typography>

        <Typography variant="h6" color="text.primary" gutterBottom>
          There is no design yet
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          Please try again later..
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </Paper>
    </Box>
  );
};

export default NotFound;
