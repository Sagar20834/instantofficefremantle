import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="grow mt-14">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
