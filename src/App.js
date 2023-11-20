import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import RegisterPage from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Stats from "./pages/Stats/Stats";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/stats" component={Stats} />



      </Switch>
    </Router>
      
  )
}

export default App;
