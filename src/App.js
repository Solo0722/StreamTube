import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Main from "./pages/main";
import GlobalProvider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<Main />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
