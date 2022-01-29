import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './app.scss';
import Header from "../component/header/Header";

const App = ()=>  {
  return (
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact>
              <div className="app">
                sdds
              </div>
            </Route>
          </Switch>
        </Router>
  );
}

export default App;
