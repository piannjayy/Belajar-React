import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List/List";
import { Provider } from "react-redux";
import store from "./store";
import TemaContext, { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  // const [isTema, setIsTema] = useState(false);
  // const [count, setCount] = useState(0)

  function Header() {
  // const { darkMode, setDarkMode } = useTheme();
  return (
    <header className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <h3 className="text-xl font-bold">Restaurant Ku</h3>
      </div>
    </header>
  );
}


  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/hom" element={<Home />} />
            <Route path="/" element={<List />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
