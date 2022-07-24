import logo from "src/assets/pearhead.svg";
import "src/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width={200} height={300} />
        <span>This my react boilerplate, This project setup for</span>
        <div className="lt">
          <ul>
            <li>Folder structure: hooks, lib, features</li>
            <li>Utils: helper function</li>
            <li>Automate, Deployment: Jenkinsfile, Dockerfile</li>
            <li>Code formatting: Eslint, prettier</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
