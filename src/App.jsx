import "./App.css";

import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Context</h1>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default App;
