import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app-body">
      <div className="main-body">
        <Sidebar></Sidebar>
        <Chat />
      </div>
    </div>
  );
}

export default App;
