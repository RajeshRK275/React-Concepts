import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import HomePage from "./Pages/HomePage";
import DashBoard from "./Pages/DashBoard";
import PageNotFound from "./Pages/PageNotFount";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Products from "./Pages/Products";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/products/:id" element={<Products />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
