import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dash from "./pages/Dash";
import DashLayout from "./layouts/DashLayout/DashLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashLayout />}>
          <Route index element={<Dash />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
