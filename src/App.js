import { Routes, Route } from "react-router-dom";

import Login from "./routes/login/login.component";
import Main from "./routes/main/main.component";
import Navigation from "./routes/navigation/navigation.component";
import Sell from "./routes/sell/sell.component";
import Pay from "./routes/pay/pay.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<Navigation />}>
        <Route path="sell">
          <Route index element={<Sell />} />
          <Route path="pay" element={<Pay />} />
        </Route>
        <Route path="main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
