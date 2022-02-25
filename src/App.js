import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SlideShow from "./Component/SlideShow";
import Home from "./Component/Home/index";
// import Enquiry from "./Component/Enquiry/index";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/contact" exact element={<Enquiry />} /> */}
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
