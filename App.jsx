import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";

const App = () => (
  <BrowserRouter>
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        </Routes>
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
