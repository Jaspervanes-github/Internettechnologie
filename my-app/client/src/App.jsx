import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Uitleg from "./pages/Uitleg";
import Dashboard from "./pages/Dashboard";
import AddData from "./pages/AddData";
import NoPage from "./pages/NoPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          theme="dark"
        />

        <div class="header">
          <Header />
        </div>
        <div class="content">

          <BrowserRouter>
            <Routes>
              <Route exact path="/uitleg" element={<Uitleg />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/add_data" element={<AddData />} />
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
