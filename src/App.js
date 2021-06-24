import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
