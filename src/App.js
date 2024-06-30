import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Jsx/pages/Login";
import Register from "./Jsx/pages/Register";
import Dashboard from "./Jsx/pages/Dashboard";
import Setting from "./Jsx/pages/Setting";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/setting" element={<Setting />} />
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
