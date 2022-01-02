import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ListPage from "./pages/ListPage";
import AddItemPage from "./pages/AddItemPage";
import EditItemPage from "./pages/EditItemPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/services" element={<ListPage />} />
          <Route path="/" element={<Navigate replace to="/services" />} />
          <Route path="/services/add" element={<AddItemPage />} />
          <Route path="/services/edit/:id" element={<EditItemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
