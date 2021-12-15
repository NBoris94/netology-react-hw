import "./App.css";
import Data from "./components/Data";

function App() {
  return (
    <div className="container">
      <Data url={"http://localhost:7070/data"} />
      <Data url={"http://localhost:7070/loading"} />
      <Data url={"http://localhost:7070/error"} />
    </div>
  );
}

export default App;
