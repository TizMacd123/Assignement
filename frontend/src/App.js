import logo from "./logo.svg";
import "./App.css";
import FileUpload from "./pages/upload";
/*function App() {
  return (
    <div className="App">
      <FileUpload />
    </div>
  );
}*/
function App() {
  return (
    <div className="App">
      <header  style={{ width: '500px', height: '500px' }}>
        <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', height: '100px' }}/>
        <h5 className="App-title">Welcome </h5>
        
      </header>
      <FileUpload />
    </div>
  );
}


export default App;
