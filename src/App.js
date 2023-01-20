import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "../src/components/Navigation/Navigation";
import Header from "./components/Header/Header";
import WorkSection from "./components/WorkSection/WorkSection";
import Projects from "./components/Projects/Projects";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Accordion from "./components/FAQ/Accordion";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <WorkSection/>
        <Projects/>
        <Features/>
        <Testimonials/>
        <Accordion/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
