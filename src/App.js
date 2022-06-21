import { Chat } from "@mui/icons-material";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app-body">
      <div className="main-body">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
