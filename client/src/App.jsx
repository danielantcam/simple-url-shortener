import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Footer from "./components/Footer";

export default function App(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}