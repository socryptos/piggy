import { Route, Routes } from "react-router-dom";
// import { WelcomePage } from "./pages/welcomePage";
import { ExplorePage } from "./pages/explorePage";
import { NotFound } from "./pages/notFound/404";

function App() {
  return (
    <Routes basename="/piggy">
      <Route path="/piggy" element={<ExplorePage />}/>
      <Route path="*" element={<NotFound/>}/>
      {/* <Route path="/explore" element={<ExplorePage />}/> */}
    </Routes>
  );
}

export default App;
