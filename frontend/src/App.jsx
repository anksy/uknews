import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";

import NewsContainer from "./containers/news/index.container";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     // main: 'rgb(0,0,0)'
  //   }
  // },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ]
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <Header />
        <div className="content">
          <Container maxWidth="lg">
            <Switch>
              <Route path="/">
                <NewsContainer />
              </Route>
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
