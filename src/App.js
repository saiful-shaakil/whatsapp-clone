import Chat from "./Components/Chat";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Router, Routes } from "react-router";
function App() {
  return (
    <div className="app-body">
      <div className="main-body">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/rooms/:roomId" element={<Chat />}></Route>
          <Route path="/" element={<Chat />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
