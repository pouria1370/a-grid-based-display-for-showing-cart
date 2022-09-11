import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Courses from './pages/Courses'
import { createTheme,ThemeProvider } from '@material-ui/core';

const myTheme=createTheme({
  typography:{
    fontFamily:'DynaPuff',
    fontWeightLight:300,
    fontWeightRegular:500,
    fontWeightMedium:600
  },
  direction:'rtl'

  
})
function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/Courses">
          <Courses />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
