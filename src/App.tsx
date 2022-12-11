import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainTemplate from "./template/MainTemplate";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
