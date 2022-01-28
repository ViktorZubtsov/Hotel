import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './app.scss';

const App = ()=>  {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="app">
              sdds
            </div>
          </Route>
          <Route path="/test" exact>
            <div className="app">
              1111
            </div>
          </Route>
          <Route path="/">
            <div className="app">
              err
            </div>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
