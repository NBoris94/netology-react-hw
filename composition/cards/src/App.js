import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Card visibleImg>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        </div>
        <div className="col-3">
          <Card>
            <h5 className="card-title">Other Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
