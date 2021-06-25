import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import { Overview, Users, Revenue } from "./pages/Overview";
import { Report, Report1, Report2, Report3 } from "./pages/Reports";
import Product from "./pages/Product";
import Team from "./pages/Team";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/overview/revenue" exact component={Revenue} />
        <Route path="/reports" exact component={Report} />
        <Route path="/reports/report1" exact component={Report1} />
        <Route path="/reports/report2" exact component={Report2} />
        <Route path="/reports/report3" exact component={Report3} />
        <Route path="/products" exact component={Product} />
        <Route path="/team" exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
