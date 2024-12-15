import { Route, Routes } from "react-router-dom";
// import { WelcomePage } from "./pages/welcomePage";
import { ExplorePage } from "./pages/explorePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />}/>
      {/* <Route path="/explore" element={<ExplorePage />}/> */}
    </Routes>
  );
}

export default App;
