import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
