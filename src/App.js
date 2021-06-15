import "./App.css";
import datafile from "./resource-pages/datafile";
import { Route, Switch } from "react-router-dom";
import Resources from "./resource-pages/Resources";
import SingleResource from "./resource-pages/SingleResource";

function App() {
  return (
    <div className="App">
      <h1>Serenity</h1>

      <Switch>
        <Route exact path="/">
          <Resources />
        </Route>

        <Route
          path="/resource/:id"
          render={(routerProps) => (
            <SingleResource {...routerProps} resourceData={datafile} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
