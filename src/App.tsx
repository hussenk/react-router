import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page } from "./Page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"about"}>about</Link>
            </li>
            <li>
              <Link to={"home"}>home</Link>
            </li>
            <li>
              <Link to={"contact_us"}>contact us</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route
              path="about"
              element={<Page text={"this page about "} title={"About"} />}
            ></Route>
            <Route
              path="home"
              element={<Page text={"this page home "} title={"Home"} />}
            ></Route>
            <Route
              path="contact_us"
              element={
                <Page text={"this page contact us "} title={"Contact Us"} />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
