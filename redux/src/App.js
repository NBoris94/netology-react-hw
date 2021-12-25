import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
