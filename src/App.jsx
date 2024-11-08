import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SearchFeeds from "./pages/searchFeeds";
import Detail from "./pages/detail";
import FilteredPage from "./pages/filteredPage";
import Header from "./components/header";
import Footer from "./components/footer";
import Types from "./pages/types";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:name" element={<SearchFeeds />} />
        <Route path="/foodDetail/:name" element={<Detail />} />
        <Route path="/filteredFoods/:category" element={<FilteredPage />} />
        <Route path="/type/:type" element={<Types />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
