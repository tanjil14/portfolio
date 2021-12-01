import { Container, Grid } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Container>
      <Grid container>
       <Grid item xs={12} sm={12} md={4} lg={3} >
         <Profile/>
       </Grid>
       <Grid item xs>
          <Header/>
          <Router>
            <Switch>
              <Route path="/portfolio">
              <Portfolio/>
              </Route>
              <Route path="/">
              <Resume/>
              </Route>
            </Switch>
          </Router>
          <Footer/>
       </Grid>
      </Grid>
    </Container>
  );
}

export default App;
