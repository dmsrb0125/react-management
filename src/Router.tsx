import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

function Router() {
  return (
    <BrowserRouter basename="/react-manegement">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
