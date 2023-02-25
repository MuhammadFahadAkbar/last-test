import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import EditForm from "./Components/EditForm";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App font-poppins">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/forms/:id" element={<EditForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
