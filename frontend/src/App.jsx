import { createContext } from "react";
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import AppRoutes from "./routes";

import Header from "./components/common/header";
import Footer from "./components/common/footer";


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ]
  }
});


export const GlobalCtx = createContext();

function App() {
  return (
    <GlobalCtx.Provider value={{ country: "gb" }}>
      <ThemeProvider theme={theme}>
        <div className="main">
          <Header />
          <div className="content">
            <Container maxWidth="lg">
              <AppRoutes />
            </Container>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </GlobalCtx.Provider>
  );
}

export default App;
