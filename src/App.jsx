import { Box, CssBaseline, StyledEngineProvider, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />
          <Toolbar variant="dense" />
          <Outlet />
          <Footer />
        </Box>
      </StyledEngineProvider>
    </>
  );
}

export default App;
