import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SlideShow from "./Component/SlideShow";

console.log('code is here')
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SlideShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
