import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoxBN from "./projectBN/BoxBN";
import ProjectDetail from "./projectBN/ProjectDetail";

function App2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoxBN />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App2;
