import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/products" component={Products} />


      </Switch>
    </Router>
      
  )
}

export default App;
