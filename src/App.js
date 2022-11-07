import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import GlobalProvider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
