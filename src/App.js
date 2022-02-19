import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookmarksList from "./components/BookmarksList";
import BooksList from "./components/BooksList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/bookmark" element={<BookmarksList />} />
      </Routes>
    </Router>
  );
}

export default App;
