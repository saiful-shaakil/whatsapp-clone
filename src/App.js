import Chat from "./Components/Chat";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Components/firebase.init";
import LogIn from "./Components/LogIn";
function App() {
  const { user, loading, error } = useAuthState(auth);
  if (loading) {
    return "Loading...";
  }
  console.log(user);
  return (
    <div className="app-body">
      {!user ? (
        <LogIn />
      ) : (
        <div className="main-body">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}></Route>
            <Route path="/" element={<Chat />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
